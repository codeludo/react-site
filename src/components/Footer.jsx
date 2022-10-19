import "../styles/footer.css"
import viteLogo from "../../public/vite.svg"

export default function Footer() {
    return (
        <footer className="footer ">
            <small className="footer-title">© 2022 Milo developed with ❤️. Made with</small>
            <img src={viteLogo} alt="vite logo" />
        </footer>
    )
}