class Theme {
    constructor(bg0_h,bg0,bg1,bg2,bg3,bg4,bg0_s,fg0,fg1,fg2,fg3,fg4,gray3,red1,green1,yellow1,blue1,purple1,aqua1,orange1) {
        this.bg0_h = bg0_h
        this.bg0 = bg0
        this.bg1 = bg1
        this.bg2 = bg2
        this.bg3 = bg3
        this.bg4 = bg4
        this.bg0_s = bg0_s
        this.fg0 = fg0
        this.fg1 = fg1
        this.fg2 = fg2
        this.fg3 = fg3
        this.fg4 = fg4
        this.gray3 = gray3
        this.red1 = red1
        this.green1 = green1
        this.yellow1 = yellow1
        this.blue1 = blue1
        this.purple1 = purple1
        this.aqua1 = aqua1 
        this.orange1 = orange1
    }
}
const DARK = new Theme(
    '#1d2021',
    '#282828',
    '#3c3836',
    '#504945',
    '#665c54',
    '#7c6f64',
    '#32302f',
    '#fbf1c7',
    '#ebdbb2',
    '#d5c4a1',
    '#bdae93',
    '#a89984',
    '#a89984',
    '#fb4934',
    '#b8bb26',
    '#fabd2f',
    '#83a598',
    '#d3869b',
    '#8ec07c',
    '#fe8019'
)
const LIGHT = new Theme(
    '#f9f5d7',
    '#fbf1c7',
    '#ebdbb2',
    '#d5c4a1',
    '#bdae93',
    '#a89984',
    '#f2e5bc',
    '#282828',
    '#3c3836',
    '#504945',
    '#665c54',
    '#7c6f64',
    '#7c6f64',
    '#9d0006',
    '#79740e',
    '#b57614',
    '#076678',
    '#8f3f71',
    '#427b58',
    '#af3a03'
)
// Function to show color palette
const DIVWRAPPERTHEME = document.getElementById('divWrapperThemeColors')
for(i=0; i < 29; i++) {
    let themeArray = ['red0','green0','yellow0','blue0','purple0','aqua0','gray0','gray1','orange0','bg0_h','bg0','bg1','bg2','bg3','bg4','bg0_s','fg0','fg1','fg2','fg3','fg4','gray3','red1','green1','yellow1','blue1','purple1','aqua1','orange1']
    let div = document.createElement('div')
    let className = 'divThemeColorBoxEx' + i
    div.classList.add('divThemeColorBox')
    div.classList.add(className)
    let bgC = 'var(--' + themeArray[i] + ')'
    div.style.backgroundColor = bgC
    div.style.display = 'grid inline'
    div.textContent = themeArray[i]
    DIVWRAPPERTHEME.appendChild(div)
}
//Function to change background and foreground
//background
const BGRANGEINPUT = document.getElementById('backgroundThemeRange')
const BGEDIV = document.getElementById('divBackgroundThemeDisplay')
function changeBackground() {
    let value = BGRANGEINPUT.value
    let bgArray = ['bg0_h','bg0','bg1','bg2','bg3','bg4','bg0_s']
    BGEDIV.style.backgroundColor = 'var(--' + bgArray[value] + ')'
    ROOT.style.setProperty('--bgD', 'var(--' + bgArray[value] + ')')
}
BGRANGEINPUT.addEventListener('input', changeBackground)
//foreground
const FGRANGEINPUT = document.getElementById('foregroundThemeRange')
const FGEDIV = document.getElementById('divForegroundThemeDisplay')
function changeForeground() {
    let value = FGRANGEINPUT.value
    let fgArray = ['fg0','fg1','fg2','fg3','fg4']
    FGEDIV.style.backgroundColor = 'var(--' + fgArray[value] + ')'
    ROOT.style.setProperty('--fgD', 'var(--' + fgArray[value] + ')')
}
FGRANGEINPUT.addEventListener('input', changeForeground)
//Change between dark and ligh modes
const ROOT = document.querySelector(':root')
const THEMESELECTOR = document.getElementById('themeSelector')
function changeTheme() {
    if(THEMESELECTOR.checked) {
        for (const key in LIGHT) {
            ROOT.style.setProperty(`--${key}`, `${LIGHT[key]}`)
        }
        ROOT.style.setProperty('--bgD',LIGHT.bg1)
        ROOT.style.setProperty('--fgD',LIGHT.fg1)
        BGRANGEINPUT.value = 2
        FGRANGEINPUT.value = 1
    } else {
        for (const key in DARK) {
            ROOT.style.setProperty(`--${key}`, `${DARK[key]}`)
        }
        ROOT.style.setProperty('--bgD',DARK.bg0)
        ROOT.style.setProperty('--fgD',DARK.fg1)
        BGRANGEINPUT.value = 1
        FGRANGEINPUT.value = 1
    }
}
THEMESELECTOR.addEventListener('change',changeTheme)
