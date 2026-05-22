export default function ButtonContent({
  children,
  icon,
  iconPosition = "left",
  loading = false,
  classNameContent = "",
}) {
  const showLeftIcon = icon && iconPosition === "left";
  const showRightIcon = icon && iconPosition === "right";

  return (
    <>
      {loading && (
        <span className="btn__loading" aria-hidden="true">
          <span className="btn__spinner" />
        </span>
      )}

      <span
        className={`btn__content ${
          loading ? " is-hidden" : ""
        } ${classNameContent}`}
      >
        {showLeftIcon && (
          <span className="btn__icon" aria-hidden="true">
            {icon}
          </span>
        )}

        {children && <span className="btn__label">{children}</span>}

        {showRightIcon && (
          <span className="btn__icon" aria-hidden="true">
            {icon}
          </span>
        )}
      </span>
    </>
  );
}
