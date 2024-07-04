const isCamera = (device) => {
    return device.kind === "videoinput" && device.deviceId.length > 0;
};

export const getConstraints = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(isCamera);
    const camera = cameras[0];

    return camera
        ? {
            audio: false,
            video: {
                deviceId: { exact: camera.deviceId }
            }
        }
        : {
            audio: false,
            video: true
        };
};

export const getCameraStream = async () => {
    const constraints = await getConstraints();
    if (!constraints) return;

    return navigator.mediaDevices.getUserMedia(constraints);
};

export const applyStreamToVideo = async (
    video,
    stream
) => {
    if (!video || !stream) return;

    if ("srcObject" in video) {
        video.srcObject = stream;
    } else {
        // @ts-ignore
        video.src = window.URL.createObjectURL(stream);
    }
};
