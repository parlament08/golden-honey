# Page Layout Specification

## Page Structure

1. `header`
2. `hero`
3. `advantages`
4. `products`
5. `order-steps`
6. `contacts`
7. `floating-call-button`

## Breakpoints

| Breakpoint | Width |
|---|---|
| `mobile` | `< 768px` |
| `tablet` | `>= 768px` |
| `desktop` | `>= 1024px` |

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

## Container

| Breakpoint | Max Width | Padding Inline |
|---|---|---|
| `mobile` | `100%` | `20px` |
| `tablet` | `720px` | `24px` |
| `desktop` | `1140px-1200px` | `32px` |

- `width: 100%`
- `margin-inline: auto`

## Section Template

```html
<section class="section section--{name}">
  <div class="container">...</div>
</section>
```

| Section | Padding Top | Padding Bottom |
|---|---|---|
| `default` | `64px` | `64px` |
| `hero` | `80px` | `80px` |
| `advantages` | `80px` | `80px` |

## Vertical Rhythm

| Rule | Value |
|---|---|
| `title -> content` | `24px` |
| `content -> content` | `16px` |
| `card -> card` | `24px` |
| `item -> item` | `32px` |
| `section -> section` | `64px` |
| `accent section -> section` | `80px` |

## Header

- `height: 64px`
- `padding-inline: 20px`
- `display: flex`
- `align-items: center`
- `justify-content: space-between`
- `position: sticky | fixed`
- `top: 0`
- `logo -> brand: 12px`

## Hero

### Element Order

1. `title-block`
2. `hero-image`
3. `subtitle`
4. `primary-button`
5. `secondary-button`

### Spacing

- `title-block -> hero-image: 32px`
- `hero-image -> subtitle: 24px`
- `subtitle -> primary-button: 24px`
- `primary-button -> secondary-button: 12px`
- `button width (mobile): 100%`

## Advantages

### Item Structure

1. `icon`
2. `divider`
3. `title`
4. `description`

### Spacing

- `section-title -> first-item: 32px`
- `icon -> divider: 16px`
- `divider -> title: 16px`
- `title -> description: 8px`
- `item -> item: 32px`

## Products

### Card Structure

1. `image-wrapper`
2. `title`
3. `price`
4. `description`
5. `cta-button`

### Spacing

- `section-title -> first-card: 32px`
- `card -> card: 24px`
- `image-wrapper -> title: 16px`
- `title -> price: 12px`
- `price -> description: 8px`
- `description -> cta-button: 16px`
- `card padding: 20px-24px`

## Order Steps

### Element Order

1. `section-title`
2. `step-1`
3. `arrow-indicator`
4. `step-2`
5. `decorative-image`

### Spacing

- `section-title -> step-1: 32px`
- `step-1 -> arrow-indicator: 24px`
- `arrow-indicator -> step-2: 24px`
- `step-2 -> decorative-image: 32px`
- `badge -> step-title: 12px`
- `step-title -> step-description: 8px`

## Contacts

### Item Structure

1. `icon`
2. `text-block`

### Spacing

- `section-title -> first-contact: 32px`
- `contact -> contact: 20px`
- `icon width: 40px-48px`
- `icon/text gap: 16px`
- `text-block: flex-grow: 1`

## Floating Call Button

- `position: fixed`
- `right: 20px`
- `bottom: 24px`
- `width: 56px`
- `height: 56px`
- `z-index: above-content`

## Grid Rules

| Block | Mobile | Tablet | Desktop |
|---|---|---|---|
| `hero` | `1 column` | `1-2 columns` | `2 columns (text + image)` |
| `advantages` | `1 column` | `2-3 columns` | `3 columns` |
| `products` | `1 column` | `2 columns` | `3 columns` |

## Alignment Rules

- `container: centered`
- `mobile: global center alignment`
- `hero: center text`
- `advantages: center text`
- `cards: left internal alignment`

## Constraints

- Use only `Spacing Tokens` values.
- Do not use arbitrary spacing values.
- Keep section paddings consistent by section type.
- Keep card paddings consistent.
- Prevent `margin-collapse` side effects.
