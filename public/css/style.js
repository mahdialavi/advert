import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fontFace: {
    fontFamily: ''BRoya'',
    src: 'url('../fonts/BRoya.ttf?#') format('truetype')'
  },
  fontFace: {
    fontFamily: ''BRoya'',
    src: 'url('../fonts/BRoya.eot?#') format('eot'),
    url('../fonts/BRoya.woff?#') format('woff'),
    url('../fonts/BRoya.ttf?#') format('truetype')'
  },
  body: {
    backgroundColor: '#f4f3f3',
    fontFamily: ''BRoya ,Arial,Helvetica,sans-serif;''
  },
  'a': {
    textDecoration: 'none !important',
    color: '#000'
  },
  header: {
    backgroundColor: '#fff',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 67 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'string', value: '#eee' }]
  },
  'send btn-danger': {
    backgroundColor: '#c00c1a !important',
    height: [{ unit: 'px', value: 40 }],
    color: '#fff',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 16 }, { unit: 'px', value: 0 }, { unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    fontSize: [{ unit: 'px', value: 15 }],
    fontWeight: 'bold'
  },
  li: {
    listStyle: 'none'
  },
  send: {
    paddingTop: [{ unit: 'px', value: 10 }],
    paddingLeft: [{ unit: 'px', value: 19 }]
  },
  link: {
    position: 'absolute',
    top: [{ unit: 'px', value: 22 }],
    left: [{ unit: '%H', value: 0.14 }]
  },
  'link a': {
    marginLeft: [{ unit: 'px', value: 33 }],
    fontSize: [{ unit: 'px', value: 14 }]
  },
  'logo img': {
    float: 'right',
    marginTop: [{ unit: 'px', value: -39 }],
    marginRight: [{ unit: 'px', value: 43 }],
    width: [{ unit: 'px', value: 47 }]
  },
  'btn-default': {
    height: [{ unit: 'px', value: 45 }],
    width: [{ unit: 'px', value: 145 }],
    boxShadow: [{ unit: 'string', value: 'inset' }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'string', value: 'rgba(34,36,38,.15)' }],
    display: 'flex',
    float: 'right',
    marginRight: [{ unit: 'px', value: 103 }],
    borderRadius: '4px',
    paddingTop: [{ unit: 'px', value: 13 }],
    paddingLeft: [{ unit: 'px', value: 59 }],
    marginTop: [{ unit: 'px', value: -44 }]
  },
  'SelectorCity i': {
    float: 'right',
    marginTop: [{ unit: 'px', value: -43 }],
    marginRight: [{ unit: 'px', value: -27 }],
    position: 'relative',
    fontSize: [{ unit: 'px', value: 19 }],
    background: '#eee',
    height: [{ unit: 'px', value: 43 }],
    textAlign: 'center',
    paddingTop: [{ unit: 'px', value: 12 }],
    width: [{ unit: 'px', value: 44 }],
    marginRight: [{ unit: 'px', value: -44 }]
  },
  sidebar: {
    width: [{ unit: 'px', value: 400 }],
    height: [{ unit: 'px', value: 600 }],
    float: 'right',
    background: '#f4f4f4'
  },
  description: {
    marginTop: [{ unit: '%V', value: 0.17 }],
    textAlign: 'right',
    width: [{ unit: 'px', value: 257 }],
    float: 'right',
    marginRight: [{ unit: '%H', value: 0.22 }],
    fontSize: [{ unit: 'px', value: 15 }]
  },
  button: {
    height: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#c00c1a' }],
    backgroundColor: 'transparent',
    borderRadius: '3px',
    color: '#c00c1a',
    fontWeight: '700',
    position: 'absolute',
    width: [{ unit: 'px', value: 100 }],
    textAlign: 'center'
  },
  'a': {
    textDecoration: 'none'
  },
  'button:hover': {
    backgroundColor: '#c00c1a',
    color: '#fff'
  },
  '#button col-lg-2': {
    width: [{ unit: '%H', value: 0.19667 }, { unit: 'string', value: '!important' }],
    float: 'left',
    marginLeft: [{ unit: 'px', value: 17 }]
  },
  '#button': {
    marginLeft: [{ unit: 'px', value: -29 }]
  },
  // ********modal*************
  buttons: {
    height: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#c00c1a' }],
    backgroundColor: 'transparent',
    borderRadius: '3px',
    color: '#c00c1a',
    fontWeight: '700',
    position: 'absolute',
    width: [{ unit: 'px', value: 131 }],
    textAlign: 'center'
  },
  'buttons:hover': {
    backgroundColor: '#c00c1a',
    color: '#fff'
  },
  '#buttons col-lg-2': {
    width: [{ unit: '%H', value: 0.19667 }, { unit: 'string', value: '!important' }],
    float: 'left',
    maxWidth: [{ unit: '%H', value: 0.17667000000000002 }, { unit: 'string', value: '!important' }],
    marginLeft: [{ unit: 'px', value: 17 }]
  },
  '#buttons': {
    marginLeft: [{ unit: 'px', value: -29 }]
  },
  enamd: {
    marginLeft: [{ unit: '%H', value: 0.22 }],
    marginTop: [{ unit: '%V', value: 0.8 }]
  },
  social: {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#d8d8d8' }],
    marginTop: [{ unit: 'px', value: 35 }],
    width: [{ unit: '%H', value: 0.71 }],
    textAlign: 'center',
    direction: 'rtl',
    marginLeft: [{ unit: 'px', value: 52 }]
  },
  'social p': {
    marginTop: [{ unit: 'px', value: 18 }]
  },
  'social a': {
    background: '#c00c1a',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 30 }],
    borderRadius: '3px',
    color: '#fff',
    position: 'absolute',
    lineHeight: [{ unit: 'px', value: 46 }]
  },
  'social i': {
    fontSize: [{ unit: 'px', value: 17 }],
    lineHeight: [{ unit: 'px', value: 32 }]
  },
  // **advert*******
  'send-advert li': {
    width: [{ unit: '%H', value: 0.97 }],
    cursor: 'pointer',
    textAlign: 'right',
    lineHeight: [{ unit: 'px', value: 63 }],
    paddingRight: [{ unit: 'px', value: 27 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e4e3e3' }]
  },
  'send-advert li:hover': {
    background: '#f9f9f9'
  },
  'send-advert li:nth-child(1)': {
    marginTop: [{ unit: 'px', value: 15 }]
  },
  'send-advert1 li': {
    width: [{ unit: '%H', value: 0.97 }],
    cursor: 'pointer',
    textAlign: 'right',
    lineHeight: [{ unit: 'px', value: 63 }],
    paddingRight: [{ unit: 'px', value: 27 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e4e3e3' }]
  },
  'send-advert1 li:hover': {
    background: '#f9f9f9'
  },
  'send-advert1 li:nth-child(1)': {
    marginTop: [{ unit: 'px', value: 15 }],
    borderBottom: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#c1c0c0' }, { unit: 'string', value: '!important' }],
    fontWeight: 'bold'
  },
  'send-advert1 li i': {
    float: 'right',
    fontSize: [{ unit: 'px', value: 39 }]
  },
  'send-advert2 li': {
    width: [{ unit: '%H', value: 0.97 }],
    cursor: 'pointer',
    textAlign: 'right',
    lineHeight: [{ unit: 'px', value: 63 }],
    paddingRight: [{ unit: 'px', value: 27 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e4e3e3' }]
  },
  'send-advert2 li:hover': {
    background: '#f9f9f9'
  },
  'send-advert2 li:nth-child(1)': {
    marginTop: [{ unit: 'px', value: 15 }],
    borderBottom: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#c1c0c0' }, { unit: 'string', value: '!important' }],
    fontWeight: 'bold'
  },
  'send-advert2 li i': {
    float: 'right',
    fontSize: [{ unit: 'px', value: 39 }]
  },
  'submit li': {
    width: [{ unit: '%H', value: 0.97 }],
    cursor: 'pointer',
    textAlign: 'right',
    lineHeight: [{ unit: 'px', value: 63 }],
    paddingRight: [{ unit: 'px', value: 27 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e4e3e3' }]
  },
  'submit li:hover': {
    background: '#f9f9f9'
  },
  'submit li:nth-child(1)': {
    marginTop: [{ unit: 'px', value: 15 }],
    borderBottom: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#c1c0c0' }, { unit: 'string', value: '!important' }],
    fontWeight: 'bold'
  },
  'submit li i': {
    float: 'right',
    fontSize: [{ unit: 'px', value: 39 }]
  },
  '#dropzone': {
    height: [{ unit: 'px', value: 100 }]
  },
  'dz-image img': {
    height: [{ unit: 'px', value: 100 }]
  },
  'nice-select': {
    width: [{ unit: '%H', value: 1 }, { unit: 'string', value: '!important' }]
  },
  'progress-manage ul li': {
    float: 'right',
    width: [{ unit: '%H', value: 0.25 }]
  },
  'progress-manage ul li p': {
    paddingTop: [{ unit: 'px', value: 18 }]
  },
  'progress-manage ul li progress': {
    height: [{ unit: 'px', value: 3 }],
    borderRadius: '0px !important'
  },
  circle: {
    width: [{ unit: 'px', value: 20 }],
    height: [{ unit: 'px', value: 20 }],
    borderRadius: '50%',
    float: 'right',
    top: [{ unit: 'px', value: 2 }],
    marginTop: [{ unit: 'px', value: -11 }],
    right: [{ unit: 'px', value: 0 }]
  },
  'progress-manage': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    width: [{ unit: '%H', value: 0.55 }],
    height: [{ unit: 'px', value: 5 }],
    textAlign: 'right',
    marginTop: [{ unit: 'px', value: 60 }],
    display: 'block !important',
    overflow: 'visible'
  },
  progress: {
    backgroundColor: 'transparent !important'
  },
  'manage-text': {
    position: 'absolute',
    width: [{ unit: '%H', value: 0.45 }],
    right: [{ unit: '%H', value: 0.19 }],
    fontSize: [{ unit: 'px', value: 15 }],
    top: [{ unit: '%V', value: 0.3 }]
  },
  '#btn': {
    float: 'right',
    marginRight: [{ unit: '%H', value: 0.43 }],
    marginTop: [{ unit: 'px', value: 15 }]
  },
  'nav-tabs': {
    position: 'absolute',
    float: 'right',
    direction: 'rtl',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: '%V', value: 0.69 }],
    width: [{ unit: '%H', value: 1 }]
  },
  'tab-content': {
    position: 'absolute',
    float: 'right',
    direction: 'rtl',
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: '%V', value: 0.8 }],
    width: [{ unit: '%H', value: 1 }]
  },
  content: {
    width: [{ unit: '%H', value: 0.7 }]
  },
  'content phone': {
    width: [{ unit: '%H', value: 0.32 }],
    float: 'left'
  },
  'content phone p': {
    float: 'left'
  },
  'content email': {
    width: [{ unit: '%H', value: 0.43 }],
    float: 'right'
  },
  'content email p': {
    float: 'left'
  }
});
