function mudarTema() {

   var Themes = ['theme', 'dark', 'blue', 'dark-blue']
   var ThemesChanges = Themes[Math.ceil(Math.random() * (Themes.length - 1))]
   var NewTheme = document.body 
   NewTheme.classList.toggle(ThemesChanges)

}