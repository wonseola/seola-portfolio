export const THEME = {
    bg: '#fdf0f3',
    panel: '#ffffff',
    border: '#f0d4db',
    text: '#2a1215',
    subtext: '#6b4a52',
    accents: ['#7b6fd4', '#d44d6e', '#e09020', '#e0603a', '#c46fd4'],
}


// Helper shades for inline styles
export const styles = {
    panel: { backgroundColor: THEME.panel, border: `1px solid ${THEME.border}` },
    link: { color: THEME.accents[0] },
    sub: { color: THEME.subtext },
}