export default (options = {}) => ({
    service : (config = false, service = false) => service.onTransition((state) => console.log("STATE", state)),
});

