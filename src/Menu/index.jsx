import './styles.css'

function DivFromLeftMenu() {
    return (
        <div className="left-menu">
            <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>

            <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                alt="gmail logo"
            />
        </div>
    )
}

function NavFromLeftMenu() {
    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <li className="item active">
                    <span className="label">Inbox</span>
                    <span className="count">3</span>
                </li>
                <li className="item">
                    <span className="label">Starred</span>
                    <span className="count">2</span>
                </li>

                <li className="item toggle">
                    <label htmlFor="hide-read">Hide read</label>
                    <input id="hide-read" type="checkbox" checked={false} />
                </li>
            </ul>
      </nav>
    )
}

export { DivFromLeftMenu, NavFromLeftMenu }