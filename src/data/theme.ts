export const THEME = {
    bg: '#f6f4f0',
    sunken: '#efece5',
    panel: '#ffffff',
    border: '#e3ded4',
    text: '#23211d',
    subtext: '#625c52',
    accents: ['#5b6bb0', '#a8566a', '#a67c2c', '#b06040', '#87609b', '#3f8a7d'],
}


// Helper shades for inline styles
export const styles = {
    panel: { backgroundColor: THEME.panel, border: `1px solid ${THEME.border}` },
    link: { color: THEME.accents[0] },
    sub: { color: THEME.subtext },
}
