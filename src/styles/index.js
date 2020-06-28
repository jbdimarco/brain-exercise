// Global style variables, such as brand colors and common font sizes go here
// Styles can change whether or not the project is dark mode or light mode
function getStyles({ bool: isDark }) {
  return {
    backgroundColor: isDark ? "white" : "black",
  };
}

// Trying to simlify imports by making images
const images = {
  logo: "../../assets/logo.jpg",
};

export default { getStyles, images };
// export default images;
