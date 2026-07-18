"use client";

import { useState, useCallback, useRef } from "react";
import {
  convertAudioToMidi,
  downloadMidi,
  ConversionProgress,
  ConversionResult,
} from "@/lib/basicPitch";

export type ConversionState =
  | "idle"
  | "loading"
  | "analyzing"
  | "building"
  | "done"
  | "error";

export function useConvert() {
  const [state, setState] = useState<ConversionState>("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef(false);

  const convert = useCallback(async (file: File) => {
    abortRef.current = false;
    setState("loading");
    setProgress(0);
    setResult(null);
    setError(null);

    try {
      const conversionResult = await convertAudioToMidi(
        file,
        (p: ConversionProgress) => {
          if (abortRef.current) return;
          setState(p.phase as ConversionState);
          setProgress(p.percent);
        }
      );

      if (abortRef.current) return;

      setResult(conversionResult);
      setState("done");
    } catch (err) {
      if (abortRef.current) return;
      const message =
        err instanceof Error ? err.message : "Conversion failed";
      setError(message);
      setState("error");
    }
  }, []);

  const download = useCallback(
    (filename?: string) => {
      if (!result) return;
      downloadMidi(result.midiBlob, filename || "converted.mid");
    },
    [result]
  );

  const reset = useCallback(() => {
    abortRef.current = true;
    setState("idle");
    setProgress(0);
    setResult(null);
    setError(null);
  }, []);

  return {
    state,
    progress,
    result,
    error,
    convert,
    download,
    reset,
    isConverting: state === "loading" || state === "analyzing" || state === "building",
  };
}
