import type { ReactNode } from "react";

type TagProps = {
  nome: string;
  descricao?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Envolve um elemento e mostra uma etiqueta com o nome dele,
 * para fins didáticos na página /guia.
 */
export function Tag({ nome, descricao, className = "", children }: TagProps) {
  return (
    <div className={`group/tag relative ${className}`}>
      <span className="pointer-events-none absolute -top-3 left-3 z-40 rounded-md bg-red-600 px-2 py-1 font-mono text-[11px] font-bold text-white shadow-lg ring-2 ring-white/80">
        {nome}
      </span>
      {descricao && (
        <span className="pointer-events-none absolute -top-3 left-3 z-50 hidden w-56 -translate-y-full rounded-md bg-gray-900 p-2 text-xs leading-snug text-white shadow-xl group-hover/tag:block">
          <strong className="mb-0.5 block font-mono text-[11px] text-red-300">{nome}</strong>
          {descricao}
        </span>
      )}
      <div className="h-full rounded-lg outline-2 outline-dashed outline-red-500/70 outline-offset-4">
        {children}
      </div>
    </div>
  );
}
