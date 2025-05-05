// #/pages/ongoing-threads/style.ts

export const muiStyles = {
  sharedCentered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  introTitle: {
    color: '#646464',
    textAlign: 'center',
    marginTop: '18%',
    fontWeight: 700,
    fontSize: '26px',
    fontFamily: 'Helvetica',
  },
  resultContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 1,
    marginTop: '20px',
  },
  mainQueryTitle: {
    fontSize: 20,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    '&::first-letter': { textTransform: 'uppercase' },
  },
  sectionBoxLeft: {
    width: '25%',
    borderRight: '1px solid #E2E8F0',
  },
  sectionBoxRight: {
    width: '25%',
    borderLeft: '1px solid #E2E8F0',
  },
  pageContainer: {
    display: 'flex',
    flexGrow: 1,
  },
  centerSection: (width: string, background: string) => ({
    width,
    background,
  }),
  queryBox: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    height: '100%',
  },
  resultTitle: {
    marginTop: 3,
  },
  resultText: {
    marginTop: 2,
  },
  sqlQueryText: {
    marginTop: 4,
  },
};

export const styles: Record<string, React.CSSProperties> = {
  slideUpContainer: {
    display: 'inline-block',
    overflow: 'hidden',
    height: '32px',
    marginLeft: '10px',
  },
  slideUpItems: {
    padding: 0,
    margin: 0,
    animation: 'slide-up 5s infinite',
    textAlign: 'left',
    background: '-webkit-linear-gradient(0deg, #0374BB, #D264C2, #9352E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
};
