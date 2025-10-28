// lib/useBurst.js
"use client";

import { useCallback } from "react";

const pools = new WeakMap();

const DEFAULT_COLORS = ["#6d28d9", "#22c55e"];

function ensurePool(host, count) {
  let pool = pools.get(host);
  if (!pool || pool.length !== count) {
    if (pool) {
      pool.forEach((node) => node.remove());
    }
    pool = Array.from({ length: count }, () => {
      const span = document.createElement("span");
      span.className = "burst-particle";
      span.setAttribute("aria-hidden", "true");
      span.setAttribute("role", "presentation");
      host.appendChild(span);
      return span;
    });
    pools.set(host, pool);
  }
  return pool;
}

function getFallbackPosition(fallback) {
  if (typeof fallback === "function") {
    return fallback();
  }
  if (fallback && typeof fallback === "object") {
    return fallback;
  }
  return undefined;
}

export function useBurst(options = {}) {
  const {
    count = 12,
    colors = DEFAULT_COLORS,
    life = 550,
    radius = 30,
    spread = 18,
    size = [6, 12],
    mode = "target", // "target" | "body"
    fallback,
    lifeJitter = 0,
    angleJitter = 0.45,
    rotationJitter = 90,
  } = options;

  return useCallback(
    (event) => {
      if (typeof window === "undefined") return;
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

      const isBodyMode = mode === "body";
      const hostCandidate = (() => {
        if (isBodyMode) return document.body;
        const current = event?.currentTarget;
        if (current instanceof HTMLElement) return current;
        return document.body;
      })();

      const host = hostCandidate ?? document.body;
      if (!host) return;

      const pool = ensurePool(host, count);
      const useDocumentSpace =
        host === document.body || host === document.documentElement;

      const rect = !useDocumentSpace && host.getBoundingClientRect
        ? host.getBoundingClientRect()
        : undefined;

      let clientX = event?.clientX ?? undefined;
      let clientY = event?.clientY ?? undefined;

      if (clientX == null || clientY == null) {
        const fb = getFallbackPosition(fallback);
        if (useDocumentSpace) {
          clientX = fb?.x ?? window.innerWidth / 2;
          clientY = fb?.y ?? window.innerHeight * 0.8;
        } else if (rect) {
          clientX = rect.left + rect.width / 2;
          clientY = rect.top + rect.height / 2;
        } else {
          clientX = window.innerWidth / 2;
          clientY = window.innerHeight / 2;
        }
      }

      const localX = useDocumentSpace || !rect ? clientX : clientX - rect.left;
      const localY = useDocumentSpace || !rect ? clientY : clientY - rect.top;

      const minSize = Array.isArray(size) ? size[0] ?? 6 : size;
      const maxSize = Array.isArray(size) ? size[1] ?? minSize : size;
      const sizeRange = Math.max(0, maxSize - minSize);

      pool.forEach((particle, index) => {
        const angle =
          (Math.PI * 2 * index) / pool.length + Math.random() * angleJitter;
        const distance = radius + Math.random() * spread;
        const particleSize = minSize + Math.random() * sizeRange;
        const primary = colors[index % colors.length] ?? DEFAULT_COLORS[0];
        const secondary =
          colors[(index + 1) % colors.length] ?? DEFAULT_COLORS[1];

        particle.style.width = `${particleSize}px`;
        particle.style.height = `${particleSize}px`;
        particle.style.left = `${localX}px`;
        particle.style.top = `${localY}px`;
        particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
        particle.style.setProperty(
          "--dr",
          `${(Math.random() - 0.5) * rotationJitter}deg`
        );
        const lifetime = life + Math.random() * lifeJitter;
        particle.style.setProperty("--life", `${Math.max(lifetime, 120)}ms`);
        particle.style.setProperty("--burst-c1", primary);
        particle.style.setProperty("--burst-c2", secondary);
        particle.style.animation = "none";
        // force reflow to restart CSS animation
        // eslint-disable-next-line no-unused-expressions
        particle.offsetWidth;
        particle.style.animation = "";
      });
    },
    [
      count,
      colors,
      life,
      mode,
      radius,
      spread,
      size,
      fallback,
      lifeJitter,
      angleJitter,
      rotationJitter,
    ]
  );
}

export default useBurst;
