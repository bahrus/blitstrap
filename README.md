# blitstrap

This repository is an AI generated web component wrapper around the Bootstrap components.

This package chooses to forgo ShadowDOM for easier migration, but uses TypeScript for source (but not required for use).

## Components

### Card (`<bs-card>`)

A flexible and extensible content container with multiple variants and options.

#### Basic Usage

```html
<bs-card card-title="Card Title" subtitle="Card Subtitle">
  Card content goes here.
</bs-card>
```

#### Properties

- `variant` - Card color variant (primary, secondary, success, danger, warning, info, light, dark, or outline-* versions)
- `card-title` - Card title text
- `subtitle` - Card subtitle text  
- `header` - Card header content
- `footer` - Card footer content
- `img-top` - URL for image at top of card
- `img-bottom` - URL for image at bottom of card
- `img-alt` - Alt text for card images

#### Examples

```html
<!-- Basic card -->
<bs-card card-title="Basic Card">
  Some quick example text to build on the card title.
</bs-card>

<!-- Card with header and footer -->
<bs-card header="Header" card-title="Special Title" footer="Footer">
  Card content
</bs-card>

<!-- Colored card variants -->
<bs-card variant="primary" card-title="Primary Card">
  Primary card content
</bs-card>

<!-- Outline variants -->
<bs-card variant="outline-success" card-title="Success Outline">
  Success outline card content
</bs-card>
```

## Development

```bash
npm install
npm run build
npm run dev    # Watch mode
```

View the demo at `demo.html` after building.

