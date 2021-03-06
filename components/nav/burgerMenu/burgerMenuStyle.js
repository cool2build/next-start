export const burgerMenuStyle = `
  .bar1, .bar2, .bar3 {
    width: 28px;
    height: 5px;
    background-color: rgb(252, 252, 252);
    margin: 4px 0;
    transition: 0.25s;
  }

  /* Rotate first bar */
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-7px, 5px) ;
    transform: rotate(-45deg) translate(-7px, 5px) ;
    background: rgb(252, 252, 252);
  }

  /* Fade out the second bar */
  .change .bar2 {
    opacity: 0;
  }

  /* Rotate last bar */
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-7px, -7px) ;
    transform: rotate(45deg) translate(-7px, -7px) ;
    background: rgb(252, 252, 252);
  }
`;