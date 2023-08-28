const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative ${props.className || ""}`}>
        <div className={`absolute m-auto blur-[120px] ${props.wrapperClassName || ""}`}
            style={{
                background:
                    "linear-gradient(to top, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
            }}>

        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper