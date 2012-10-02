var socket = io.connect('http://cuppa.sch.bme.hu:3000');
socket.on('news', function (data) {
  socket.emit('my other event', { my: 'data' });
});