import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import {
  WHATSAPP_NUMERO,
  EMAIL,
  INSTAGRAM_LINK,
  AVALIACAO_NOTA,
  AVALIACAO_TOTAL,
} from "../lib/contato";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Barbearia Cuba Libre | Cortes e barba em Campinas" },
      {
        name: "description",
        content:
          "Barbearia masculina em Campinas: cortes clássicos e modernos, adultos e infantis, e barba. Atendimento acolhedor e agendamento por WhatsApp.",
      },
      { name: "author", content: "Barbearia Cuba Libre" },
      { property: "og:title", content: "Barbearia Cuba Libre | Cortes e barba em Campinas" },
      {
        property: "og:description",
        content:
          "Estilo e tradição cubana em Campinas. Cortes modernos que valorizam sua imagem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bitter:wght@400;600;700&family=Barlow:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Barbearia Cuba Libre",
          description:
            "Barbearia masculina em Campinas: cortes clássicos e modernos, adultos e infantis, e barba. Atendimento acolhedor, hora marcada e estacionamento.",
          url: "https://barbeariacubalibr.com",
          telephone: `+${WHATSAPP_NUMERO}`,
          email: EMAIL,
          sameAs: [INSTAGRAM_LINK],
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Professor Luiz Rosa, 204-B",
            addressLocality: "Campinas",
            addressRegion: "SP",
            postalCode: "13013-160",
            addressCountry: "BR",
          },
          image: [
            "https://barbeariacubalibr.com/logo-barbearia-cuba-libre.png",
            "https://barbeariacubalibr.com/barbeiros-proprietarios-barbearia-cuba-libre.jpg",
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:30",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:30",
              closes: "18:00",
            },
          ],
          areaServed: {
            "@type": "City",
            name: "Campinas",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(AVALIACAO_NOTA),
            ratingCount: String(AVALIACAO_TOTAL),
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Marca a página antes do primeiro desenho: sem JavaScript, as seções
            com animação de entrada nunca ficam escondidas. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
