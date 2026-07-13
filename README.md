# Wuyan background assets

Public animated WebP assets used as Discord profile backgrounds.

## Permanent CDN URLs

- Grapes: `https://cdn.jsdelivr.net/gh/xinyiheng/wuyan-background-assets@9cde8047570650c28ff33bb7249bcf7afb356e4e/assets/wuyan-grapes.webp`
- Tea: `https://cdn.jsdelivr.net/gh/xinyiheng/wuyan-background-assets@9cde8047570650c28ff33bb7249bcf7afb356e4e/assets/wuyan-tea.webp`

## Random background

Install `wuyan-random-background.user.js` with Tampermonkey, then use this value in the existing CSS rule:

```css
background-image: var(--wuyan-profile-bg) !important;
```

The userscript chooses one of the two assets whenever Discord is opened or refreshed.
