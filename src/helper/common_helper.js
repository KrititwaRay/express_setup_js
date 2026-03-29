export class CommonHelper {

    methodNotAllowed(res, msg) {


        let response_data = {
            dataset: {},
            status: {
                action_status: false,
                msg: msg
            }
        };
        res.setHeader('content-type', 'application/json');
        res.status(405);
        res.send({ response: response_data });

    }

}