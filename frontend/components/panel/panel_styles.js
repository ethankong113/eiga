export const createNoteProps = (top, left) => ({
  className: 'overlay-pin',
  style: {
    top: top + 8,
    left: left + 8,
    color: 'red',
    position: 'absolute',
    width: '300px',
    border: '3px solid #303F9F',
    backgroundColor: '#212121',
    padding: '14px',
    zIndex: 2
  }
});
export const createPinStyle = (top, left) => ({
  top,
  left,
  height: 20,
  width: 20,
  position: 'absolute',
  backgroundColor: '#303F9F'
});

export const btnFieldStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '14px'
};

export const btnStyle = {
  margin: '5px'
};
