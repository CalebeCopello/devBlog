const DIVWRAPPERTHEME = document.getElementById('divWrapperTheme')
for(i=0; i < 29; i++) {
    let themeArray = ['red0','green0','yellow0','blue0','purple0','aqua0','gray0','gray1','orange0','bg0_h','bg0','bg1','bg2','bg3','bg4','bg0_s','fg0','fg1','fg2','fg3','fg4','gray3','red1','green1','yellow1','blue1','purple1','aqua1','orange1']
    let div = document.createElement('div')
    let className = 'themeColorDivEx' + i
    div.classList.add('themeColor')
    div.classList.add(className)
    let bgC = 'var(--' + themeArray[i] + ')'
    div.style.backgroundColor = bgC
    div.textContent = themeArray[i]
    DIVWRAPPERTHEME.appendChild(div)
}