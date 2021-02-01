const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)
  
  const socketUrl = 'https://polar-island-03343.herokuapp.com/'
  const socketBuilder = new SocketBuilder({socketUrl})

  const peerConfig = Object.values({
    id: undefined, 
    config: {
      host: 'sheltered-wave-21810.herokuapp.com',
      secure: true,
      // port: 9000,
      // host: 'localhost',
      path: '/'
    }
  })
  const peerBuilder = new PeerBuilder({ peerConfig })

  const view = new View()
  const media = new Media()
  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder
  }

  Business.initalize(deps)
  

}

window.onload = onload