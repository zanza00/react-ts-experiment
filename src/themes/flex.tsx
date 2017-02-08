import csjs from 'csjs';
import insertCss from 'insert-css';

interface FlexStyles {
  flexContainer: string,
  flexItem:string,
}

export const flexStyles: FlexStyles = csjs`

  .flexContainer {

    display: flex;
    }

.flexItem:nth-child(1) {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    }

.flexItem:nth-child(2) {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    }

`;

insertCss(csjs.getCss(flexStyles));
