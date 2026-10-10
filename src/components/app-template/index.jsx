import Footer from "../../Footer"
import Header from "../../Header"

const AppTemplate=({
    children,
    showNavbar= true ,
    showFooter=true,
})=>{
return(
    <div className="app-layout">
        {showNavbar&&<Header/>}

        <main className="app-content">
            {children}
        </main>

        {showFooter&&<Footer/>}
    </div>
)
}
export default AppTemplate;