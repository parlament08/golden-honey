# Design System Specification

## Foundations

- `approach: mobile-first`
- `base-unit: 4px`

## Spacing Tokens

| Token | Value |
|---|---|
| `space-1` | `4px` |
| `space-2` | `8px` |
| `space-3` | `12px` |
| `space-4` | `16px` |
| `space-5` | `20px` |
| `space-6` | `24px` |
| `space-8` | `32px` |
| `space-10` | `40px` |
| `space-12` | `48px` |
| `space-16` | `64px` |
| `space-20` | `80px` |

## Layout Tokens

| Token | Value |
|---|---|
| `section-padding-y` | `64px` |
| `section-padding-y-large` | `80px` |
| `card-padding` | `20px` |
| `card-padding-large` | `24px` |
| `gap-xs` | `8px` |
| `gap-sm` | `12px` |
| `gap-md` | `16px` |
| `gap-lg` | `24px` |
| `gap-xl` | `32px` |

## Container Tokens

| Token | Value |
|---|---|
| `container-max-width-mobile` | `100%` |
| `container-padding-x-mobile` | `20px` |
| `container-max-width-tablet` | `720px` |
| `container-padding-x-tablet` | `24px` |
| `container-max-width-desktop` | `1140px-1200px` |
| `container-padding-x-desktop` | `32px` |

- `container-margin-x: auto`

## Typography Tokens

### Font Family

- `font-family-primary: 'Montserrat', 'Inter', sans-serif`

### Font Scale

| Token | Value |
|---|---|
| `font-xs` | `13px` |
| `font-sm` | `14px` |
| `font-md` | `16px` |
| `font-lg` | `18px` |
| `font-xl` | `20px` |
| `font-2xl` | `24px` |
| `font-3xl` | `28px` |
| `font-4xl` | `32px` |
| `font-5xl` | `40px` |

### Type Roles

| Role | Font Size | Font Weight | Line Height | Transform |
|---|---|---|---|---|
| `hero-title` | `40px` | `800` | `1.1` | `uppercase` |
| `section-title` | `28px` | `700` | `normal` | `uppercase` |
| `card-title` | `18px-20px` | `600` | `normal` | `none` |
| `price` | `20px-22px` | `700` | `normal` | `none` |
| `body` | `16px` | `400` | `normal` | `none` |
| `muted` | `14px` | `400` | `normal` | `none` |

## Color Tokens

| Token | Value |
|---|---|
| `color-primary` | `#F4B400` |
| `color-background` | `#F5EFE4` |
| `color-surface` | `#FFFFFF` |
| `color-text-primary` | `#4B3F35` |
| `color-text-secondary` | `#6E6258` |
| `color-text-muted` | `#9C9187` |
| `color-text-on-primary` | `#FFFFFF` |
| `color-border-light` | `#E6DED4` |
| `color-border-accent` | `#F4B400` |
| `color-overlay` | `rgba(0,0,0,0.45)` |

## Radius Tokens

| Token | Value |
|---|---|
| `radius-sm` | `8px` |
| `radius-md` | `16px` |
| `radius-lg` | `20px` |
| `radius-xl` | `28px` |
| `radius-full` | `999px` |

## Elevation Tokens

| Token | Value |
|---|---|
| `elevation-1` | `0 4px 12px rgba(0,0,0,0.05)` |
| `elevation-2` | `0 8px 24px rgba(0,0,0,0.08)` |
| `elevation-3` | `0 16px 40px rgba(0,0,0,0.12)` |

## Background Variants

| Variant | Background | Text Color |
|---|---|---|
| `section-default` | `color-background` | `color-text-primary` |
| `section-accent` | `color-primary` | `color-text-on-primary` |

## Button Tokens

| Token | Value |
|---|---|
| `button-height` | `52px` |
| `button-height-small` | `44px` |
| `button-radius` | `28px` |
| `floating-button-size` | `56px` |

### Button Variants

| Variant | Background | Border | Text/Icon |
|---|---|---|---|
| `button-primary` | `color-primary` | `none` | `color-text-on-primary` |
| `button-secondary` | `transparent` | `1px solid color-text-primary` | `color-text-primary` |
| `button-floating-call` | `color-text-primary` | `none` | `#FFFFFF` |

- `button-floating-call.position: fixed`
- `button-floating-call.inset: bottom-right`

## Card Tokens

| Token | Value |
|---|---|
| `card-background` | `#FFFFFF` |
| `card-radius` | `20px` |
| `card-padding` | `20px-24px` |
| `card-shadow` | `elevation-2` |
| `card-image-radius` | `16px` |
| `card-image-border` | `2px solid color-primary` |
| `card-image-padding` | `12px` |

## Grid Rules

| Breakpoint | Products Grid |
|---|---|
| `mobile` | `1 column` |
| `tablet` | `2 columns` |
| `desktop` | `3 columns` |

## Component Token Map

```json
{
  "spacing": {
    "xs": "8px",
    "sm": "12px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "section": "64px"
  },
  "radius": {
    "card": "20px",
    "button": "28px",
    "image": "16px",
    "circle": "999px"
  },
  "colors": {
    "primary": "#F4B400",
    "background": "#F5EFE4",
    "surface": "#FFFFFF",
    "text-primary": "#4B3F35",
    "text-muted": "#9C9187"
  },
  "buttons": {
    "height": "52px",
    "font-size": "16px",
    "weight": "600"
  }
}
```

## Constraints

- Use only defined tokens.
- Do not use arbitrary spacing, radius, or color values.
- Keep section and card paddings consistent per token rules.
