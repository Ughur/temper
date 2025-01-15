# Temper

An unstyled, accessible, and performant drawer component for React. Designed as a flexible modal/drawer pattern for desktop, tablet, and mobile interfaces.

---

## Features

- ⚡ **Performant & Smooth**: Built with physics-based drag interactions and touch gestures.
- ♿ **Accessible**: Full keyboard navigation, focus trap, and ARIA attributes powered by Radix UI.
- 📐 **Snap Points**: Supports multiple snap points, custom height steps, and expandability.
- 🎨 **Unstyled**: Complete freedom to style with Tailwind CSS, CSS Modules, or Styled Components.
- 📱 **Mobile First**: Built for seamless touch interactions and native sheet feelings on mobile & desktop.

---

## Installation

Install via your preferred package manager:

```bash
npm install @ughur/temper
# or
pnpm add @ughur/temper
# or
yarn add @ughur/temper
```

---

## Quick Start

```tsx
import { Drawer } from '@ughur/temper';

export function Example() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="px-4 py-2 bg-black text-white rounded-md">
        Open Drawer
      </Drawer.Trigger>
      
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 p-6">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
          
          <Drawer.Title className="text-lg font-medium mb-2">
            Drawer Title
          </Drawer.Title>

          <Drawer.Description className="text-gray-600 mb-4">
            This is a clean, accessible drawer component.
          </Drawer.Description>
          
          <Drawer.Close className="mt-auto py-2 bg-gray-100 rounded-md text-sm">
            Close
          </Drawer.Close>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```

---

## Background Scaling Effect

To scale the page background when the drawer opens (iOS modal style), wrap your application content with `data-temper-drawer-wrapper`:

```tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-temper-drawer-wrapper>
      {children}
    </div>
  );
}
```

Then enable background scaling on the drawer:

```tsx
<Drawer.Root shouldScaleBackground>
  {/* Drawer components */}
</Drawer.Root>
```

---

## API Reference

| Component | Description |
| :--- | :--- |
| `Drawer.Root` | Main container managing drawer state, snap points, and open/close events. |
| `Drawer.Trigger` | The button or element that opens the drawer. |
| `Drawer.Portal` | Portals the drawer content outside the current DOM hierarchy. |
| `Drawer.Overlay` | Semi-transparent background overlay behind the active drawer. |
| `Drawer.Content` | Main container for drawer inner contents. |
| `Drawer.Title` | Accessible title for screen readers. |
| `Drawer.Description` | Accessible description for screen readers. |
| `Drawer.Close` | Button to trigger drawer closure. |

---

## License

[MIT](LICENSE.md) © Ughur
