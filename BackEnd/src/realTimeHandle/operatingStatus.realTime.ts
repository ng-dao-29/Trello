module.exports = (io, socket) => {
  const setupConnect = (dataUser) => {
    console.log(dataUser);
    socket.user = {
      id: dataUser._id,
      name: dataUser.name,
      email: dataUser.email,
    };
    socket.join(dataUser._id);
  };

  const setupDisconnect = () => {
    console.log(socket.id);
  };

  socket.on("setup", setupConnect);
  socket.on("disconnect", setupDisconnect);
};
