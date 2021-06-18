export default () => ({
    service : (_, service = false) => service.onTransition((state) => console.log("STATE", state)),
});

