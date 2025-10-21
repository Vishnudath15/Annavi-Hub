var APP_DATA = {
  "scenes": [
    {
      "id": "0-meeting-room",
      "name": "Meeting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3535624181172903,
          "pitch": 0.12669827720779736,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2830873714368654,
          "pitch": 0.10325952752211442,
          "rotation": 0,
          "target": "2-store"
        },
        {
          "yaw": 2.330908354396648,
          "pitch": 0.4127584106883173,
          "rotation": 0,
          "target": "0-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-store",
      "name": "store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.903622498770325,
          "pitch": 0.2937360421442392,
          "rotation": 6.283185307179586,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Hub Annavi",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
