function Layout(props) {
    return (
        <did>
            <div className="container">{props.header}</div>
            <div className="container">{props.menu}</div>
            <div className="container">{props.content}</div>
            <div>{props.footer}</div>
        </did>
    )
}

export default Layout; 