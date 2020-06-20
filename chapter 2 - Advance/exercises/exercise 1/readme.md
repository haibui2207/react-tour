### ***Question***: Assume we have a design for Web and Mobile but they are too different and we have to seperate them. Many cases like this, so we have to create a HOC that switch Web and Mobile component based on device width
Requirement: 
+ Have 2 components called WebComponent and MobileComponent
+ WebComponent has a background **red**
+ MobileComponent has a background **yellow**
+ Breakpoint will make switch components is **< 576**
+ HOC have 3 params: first is WebComponent, second is MobileComponent and third is breakpoint to switch component which has default value is 576 (third param will allow user switch components based on another breakpoint)
+ HOC conditional: if current width < breakpoint ? MobileComponent : WebComponent

![demo](demo.gif)