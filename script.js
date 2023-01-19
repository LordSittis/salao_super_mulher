(function(){
    var script = {
 "start": "this.playAudioList([this.audio_EF7753C1_CA26_C067_41A3_B29BA4025FEB]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Image_C4FD9D90_C9EE_C0E5_41C8_482DD5653881"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.63,
  "pitch": -44.54
 },
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "targetPitch": -44.54
  }
 ],
 "manualZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_camera",
 "manualRotationSpeed": 165,
 "automaticZoomSpeed": 5,
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 18.63,
  "pitch": -90,
  "stereographicFactor": 1
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -130.24,
  "pitch": -17.71
 },
 "class": "PanoramaCamera",
 "id": "panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.97,
  "pitch": 1.54
 },
 "class": "PanoramaCamera",
 "id": "panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 7.35,
  "pitch": -10.29
 },
 "class": "PanoramaCamera",
 "id": "camera_EBEA6919_CE7B_C1E7_41E4_99A4B9D9DDE6",
 "automaticZoomSpeed": 10
},
{
 "label": "ESM - FOTO SALA MASSAGEM 3",
 "id": "panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111"
  }
 ],
 "overlays": [
  "this.overlay_DEBA4ABE_C7DD_EF12_41C4_10997CB68E38",
  "this.panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_tcap0"
 ],
 "thumbnailUrl": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfovMin": "135%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "mouseControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -126.41,
  "pitch": 2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_EB9658DC_CE7B_C01D_41A5_0800F4803942",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -158.69,
  "pitch": -7.35
 },
 "class": "PanoramaCamera",
 "id": "camera_EB9FB8EA_CE7B_C025_41D6_6C5B0D074E97",
 "automaticZoomSpeed": 10
},
{
 "label": "espa\u00e7o super Mulher",
 "id": "panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_DF5D64FB_C7CD_BB12_41BD_4415C65B555F"
 ],
 "thumbnailUrl": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "114%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "label": "ESM - RECEP\u00c7\u00c3O FOTO 2",
 "id": "panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0"
  }
 ],
 "overlays": [
  "this.overlay_DEB8E161_C7C2_FD2E_4196_D1A422BA999A",
  "this.overlay_DE7D5617_C7C2_E712_41CF_5AFFAE8D9A6D",
  "this.overlay_DE4849B3_C7C2_ED12_41AF_2D0B428E270D",
  "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_tcap0"
 ],
 "thumbnailUrl": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfovMin": "135%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -41.14,
  "pitch": -22.78
 },
 "class": "PanoramaCamera",
 "id": "camera_EB88E8FD_CE7B_C01F_41E6_352FACBE57E4",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_camera"
  },
  {
   "media": "this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_camera"
  },
  {
   "media": "this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_camera"
  },
  {
   "media": "this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_camera"
  },
  {
   "media": "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_camera"
  },
  {
   "media": "this.panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_camera"
  },
  {
   "media": "this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_camera"
  },
  {
   "media": "this.panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_camera"
  },
  {
   "media": "this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_camera"
  },
  {
   "media": "this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_camera"
  },
  "this.PanoramaPlayListItem_EBB0F89A_CE7B_C0E5_41AA_E9A337B94466",
  "this.PanoramaPlayListItem_EBB15899_CE7B_C0E7_41D8_2B78A49566E3",
  "this.PanoramaPlayListItem_EBB1E899_CE7B_C0E7_41D3_83661D5051CA",
  {
   "media": "this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_camera"
  },
  "this.PanoramaPlayListItem_EBB06899_CE7B_C0E7_41AA_732118C8447E"
 ],
 "id": "mainPlayList"
},
{
 "label": "ESM FOTO RUA 2",
 "id": "panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D"
  }
 ],
 "overlays": [
  "this.overlay_DED3C018_C7C2_BB1E_41E7_74AF77A17859",
  "this.overlay_DF18BBBD_C7C2_AD16_41DF_74BE1945CA4F",
  "this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_tcap0"
 ],
 "thumbnailUrl": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfovMin": "135%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 16.9,
  "pitch": -8.08
 },
 "class": "PanoramaCamera",
 "id": "camera_EBDF7922_CE7B_C025_41E1_EE63B8A7DC33",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E43FD93E_CE7B_C01D_41D9_E8A9F085B97C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 8.8,
  "pitch": 4.35
 },
 "class": "PanoramaCamera",
 "id": "panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 171.18,
  "pitch": 2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_EBC0292B_CE7B_C03B_41B7_7744B4BEE4E3",
 "automaticZoomSpeed": 10
},
{
 "label": "ESM FOTO VITRINE  5",
 "id": "panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0"
  }
 ],
 "overlays": [
  "this.overlay_DE862D0A_C7DE_6AFD_41DA_5B6578B7C60A",
  "this.panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_tcap0"
 ],
 "thumbnailUrl": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_t.jpg",
 "hfovMax": 140,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfovMin": "135%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -132.24,
  "pitch": -27.18
 },
 "class": "PanoramaCamera",
 "id": "camera_EBE6B910_CE7B_C1E5_41DE_7745CC1054F2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_EB86E8F3_CE7B_C02B_41CB_36BBDC69B9DE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 69.3,
  "pitch": 1.34
 },
 "class": "PanoramaCamera",
 "id": "panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 3.67,
  "pitch": 7.35
 },
 "class": "PanoramaCamera",
 "id": "camera_EBFDA906_CE7B_C1ED_41E8_FB93A6792938",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 26.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E435E934_CE7B_C02D_41E4_D16006A1F768",
 "automaticZoomSpeed": 10
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_EF7753C1_CA26_C067_41A3_B29BA4025FEB.mp3",
  "oggUrl": "media/audio_EF7753C1_CA26_C067_41A3_B29BA4025FEB.ogg"
 },
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_EF7753C1_CA26_C067_41A3_B29BA4025FEB",
 "data": {
  "label": "summer nostalgia - rihanna, avicii, justin bieber, kygo, selena gomez, alok, bastille, david guetta (128 kbps)"
 }
},
{
 "label": "ESM FOTO ENTRADA 1",
 "id": "panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -153.57,
   "backwardYaw": 5.33,
   "distance": 1,
   "panorama": "this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D"
  }
 ],
 "overlays": [
  "this.overlay_DEB6E390_C7C3_FDEE_41D0_078BBCCBA982",
  "this.overlay_DE030076_C7C3_BB12_41E5_C67DE8BE9C64",
  "this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_tcap0"
 ],
 "thumbnailUrl": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfovMin": "135%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "label": "ESM FOTO LAVATORIO 4",
 "id": "panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111"
  }
 ],
 "overlays": [
  "this.overlay_DE903056_C7DE_BB12_41E3_1E92ACB23FE3",
  "this.overlay_DE5B47F7_C7DE_A512_41C1_A0D1CD980D6A",
  "this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_tcap0"
 ],
 "thumbnailUrl": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfovMin": "135%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -93.14,
  "pitch": 1.78
 },
 "class": "PanoramaCamera",
 "id": "panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "RUA 1",
 "id": "panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.33,
   "backwardYaw": -153.57,
   "distance": 1,
   "panorama": "this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537"
  }
 ],
 "overlays": [
  "this.overlay_DEAE145D_C7C2_5B16_41DA_924032CE8531",
  "this.overlay_DDF7BB2D_C7C5_ED37_4182_243F6CB07599",
  "this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0"
 ],
 "thumbnailUrl": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_t.jpg",
 "hfovMax": 140,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfovMin": "135%",
 "hfov": 360,
 "class": "Panorama"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 58,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "playbackBarProgressBorderSize": 0,
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "MainViewer",
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "progressOpacity": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarRight": 0,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "progressRight": 0,
 "class": "ViewerArea",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "playbackBarBorderColor": "#FFFFFF",
 "borderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "progressLeft": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "toolTipPaddingTop": 4,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "progressBarBorderColor": "#0066FF",
 "progressBarBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "minHeight": 50,
 "top": 0,
 "progressBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "bottom": 80,
 "shadow": false,
 "toolTipShadowSpread": 0,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "minWidth": 100,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipOpacity": 0.18,
 "toolTipFontSize": "12px",
 "playbackBarBottom": 5,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBarBorderRadius": 0,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": 34,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 140,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--STICKER"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 641,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "height": "100%",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--INFO photo"
 },
 "backgroundOpacity": 0.6,
 "visible": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "backgroundOpacity": 0.6,
 "visible": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--LOCATION"
 },
 "backgroundOpacity": 0.6,
 "visible": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--FLOORPLAN"
 },
 "backgroundOpacity": 0.6,
 "visible": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "backgroundOpacity": 0.6,
 "visible": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "bottom": "0%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#04A3E1",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "--REALTOR"
 },
 "backgroundOpacity": 0.6,
 "visible": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "id": "Image_C4FD9D90_C9EE_C0E5_41C8_482DD5653881",
 "maxHeight": 415,
 "maxWidth": 415,
 "verticalAlign": "middle",
 "right": "41.13%",
 "borderRadius": 0,
 "width": "14.769%",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "32.87%",
 "class": "Image",
 "height": "26.552%",
 "propagateClick": true,
 "shadow": false,
 "url": "skin/Image_C4FD9D90_C9EE_C0E5_41C8_482DD5653881.png",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2401"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 58,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.24,
   "yaw": 53.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -18.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBD8DBA_C9E9_C025_41CA_3B6A9B2B451B",
   "pitch": -18.63,
   "yaw": 53.1,
   "hfov": 11.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111, this.camera_EB88E8FD_CE7B_C01F_41E6_352FACBE57E4); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DEBA4ABE_C7DD_EF12_41C4_10997CB68E38",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "hfov": 45,
 "inertia": false,
 "angle": 180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1254,
    "height": 1254
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "click": "this.openLink('http://econect.tec.br', '_blank')",
 "id": "panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_tcap0",
 "distance": 50
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 58,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 58,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 58,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.23,
   "yaw": 16.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -52.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DE317EF5_C9E9_402F_41BE_793DC5212E7C",
   "pitch": -52.47,
   "yaw": 16.34,
   "hfov": 7.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537, this.camera_EBFDA906_CE7B_C1ED_41E8_FB93A6792938); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF5D64FB_C7CD_BB12_41BD_4415C65B555F",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.48,
   "yaw": -120,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -14.7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBD7DBA_C9E9_C025_41E6_4212D59B83A1",
   "pitch": -14.7,
   "yaw": -120,
   "hfov": 11.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD, this.camera_EBEA6919_CE7B_C1E7_41E4_99A4B9D9DDE6); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DEB8E161_C7C2_FD2E_4196_D1A422BA999A",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.1,
   "yaw": 49.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -20.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBD2DBA_C9E9_C025_41BD_25D66C4F5353",
   "pitch": -20.72,
   "yaw": 49.9,
   "hfov": 11.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A, this.camera_EBDF7922_CE7B_C025_41E1_EE63B8A7DC33); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE7D5617_C7C2_E712_41CF_5AFFAE8D9A6D",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.83,
   "yaw": -40.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -24.06
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBDDDBA_C9E9_C025_41E2_0C7F37626604",
   "pitch": -24.06,
   "yaw": -40.76,
   "hfov": 10.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0, this.camera_EBC0292B_CE7B_C03B_41B7_7744B4BEE4E3); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE4849B3_C7C2_ED12_41AF_2D0B428E270D",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "hfov": 45,
 "inertia": false,
 "angle": 169,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1254,
    "height": 1254
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "click": "this.openLink('http://econect.tec.br', '_blank')",
 "id": "panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_tcap0",
 "distance": 50
},
{
 "media": "this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_EBB0F89A_CE7B_C0E5_41AA_E9A337B94466",
 "camera": "this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_camera"
},
{
 "media": "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_EBB15899_CE7B_C0E7_41D8_2B78A49566E3",
 "camera": "this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_camera"
},
{
 "media": "this.panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_EBB1E899_CE7B_C0E7_41D3_83661D5051CA",
 "camera": "this.panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_camera"
},
{
 "media": "this.panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_EBB06899_CE7B_C0E7_41AA_732118C8447E",
 "camera": "this.panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_camera"
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.78,
   "yaw": 17.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -6.79
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCC3CDB9_C9E9_C027_41E1_208399A03A51",
   "pitch": -6.79,
   "yaw": 17.03,
   "hfov": 11.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DED3C018_C7C2_BB1E_41E7_74AF77A17859",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.29,
   "yaw": 169.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": 29.84
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBC6DBA_C9E9_C025_41DF_C3807D5DC003",
   "pitch": 29.84,
   "yaw": 169.67,
   "hfov": 10.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF18BBBD_C7C2_AD16_41DF_74BE1945CA4F",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "hfov": 45,
 "inertia": false,
 "angle": 180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1254,
    "height": 1254
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "click": "this.openLink('http://econect.tec.br', '_blank')",
 "id": "panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_tcap0",
 "distance": 50
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.33,
   "yaw": 47.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -17.24
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBF6DBB_C9E9_C01B_41DE_565163A40858",
   "pitch": -17.24,
   "yaw": 47.81,
   "hfov": 11.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0, this.camera_EBE6B910_CE7B_C1E5_41DE_7745CC1054F2); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE862D0A_C7DE_6AFD_41DA_5B6578B7C60A",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "hfov": 45,
 "inertia": false,
 "angle": 180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1254,
    "height": 1254
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "click": "this.openLink('http://http://econect.tec.br', '_blank')",
 "id": "panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_tcap0",
 "distance": 50
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.57,
   "yaw": 0.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -12.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBC3DBA_C9E9_C025_41CB_FDABBF602304",
   "pitch": -12.78,
   "yaw": 0.6,
   "hfov": 11.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DEB6E390_C7C3_FDEE_41D0_078BBCCBA982",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.53,
   "yaw": -153.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -27.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBCCDBA_C9E9_C025_41DA_46074B1D9E4A",
   "pitch": -27.4,
   "yaw": -153.57,
   "hfov": 10.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D, this.camera_EB86E8F3_CE7B_C02B_41CB_36BBDC69B9DE); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE030076_C7C3_BB12_41E5_C67DE8BE9C64",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "hfov": 45,
 "inertia": false,
 "angle": 180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1254,
    "height": 1254
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "click": "this.openLink('http://econect.tec.br', '_blank')",
 "id": "panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_tcap0",
 "distance": 50
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.32,
   "yaw": 175.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -17.51
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBE2DBB_C9E9_C01B_41D1_B526FC4EC2AB",
   "pitch": -17.51,
   "yaw": 175.24,
   "hfov": 11.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9, this.camera_EB9658DC_CE7B_C01D_41A5_0800F4803942); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE903056_C7DE_BB12_41E3_1E92ACB23FE3",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.86,
   "yaw": 106.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -23.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCBEDDBB_C9E9_C01B_41C0_467598C6AD2A",
   "pitch": -23.78,
   "yaw": 106.16,
   "hfov": 10.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111, this.camera_EB9FB8EA_CE7B_C025_41D6_6C5B0D074E97); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE5B47F7_C7DE_A512_41C1_A0D1CD980D6A",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "hfov": 45,
 "inertia": false,
 "angle": 163,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1254,
    "height": 1254
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "click": "this.openLink('http://econect.tec.br', '_blank')",
 "id": "panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_tcap0",
 "distance": 50
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.73,
   "yaw": 5.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -8.74
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E3156367_CA26_C02C_41D8_10546F916F99",
   "pitch": -8.74,
   "yaw": 5.33,
   "hfov": 11.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD, this.camera_E435E934_CE7B_C02D_41E4_D16006A1F768); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DEAE145D_C7C2_5B16_41DA_924032CE8531",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.54,
   "yaw": 155.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -13.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DCC31DB9_C9E9_C027_41C5_F0BBE5BEF826",
   "pitch": -13.48,
   "yaw": 155.32,
   "hfov": 11.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537, this.camera_E43FD93E_CE7B_C01D_41D9_E8A9F085B97C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DDF7BB2D_C7C5_ED37_4182_243F6CB07599",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "hfov": 45,
 "inertia": false,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1254,
    "height": 1254
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "click": "this.openLink('http://econect.tec.br', '_blank')",
 "id": "panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_tcap0",
 "distance": 50
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 527.6,
 "shadowColor": "#000000",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": 2,
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 7,
 "height": 78,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "white block"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "shadowColor": "#000000",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": 86,
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 7,
 "height": 46,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "blue block"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "shadowVerticalLength": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "verticalAlign": "top",
 "fontColor": "#FFFFFF",
 "borderRadius": 0,
 "text": "Produtos e tratamentos de beleza",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": 90,
 "class": "Label",
 "textShadowBlurRadius": 10,
 "height": 44,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "textShadowColor": "#000000",
 "textShadowVerticalLength": 0,
 "fontSize": 28,
 "fontStyle": "italic",
 "textShadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "text 2"
 },
 "textShadowOpacity": 1,
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "right": "0%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Container",
 "height": 110,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 3,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "height": "100%",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "class": "Container",
 "height": "100%",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "- EXPANDED"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "propagateClick": false,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "10%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "bottom": "80%",
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "propagateClick": true,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "10%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "layout": "absolute",
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "propagateClick": true,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "10%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "bottom": "80%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "propagateClick": true,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "10%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "layout": "absolute",
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "propagateClick": true,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "10%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "shadowOpacity": 0.3,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "propagateClick": false,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "10%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "10%",
 "class": "Container",
 "bottom": "80%",
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "backgroundOpacity": 0
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D07FB181_C7FE_5DEE_41CA_F92B093D639A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBD8DBA_C9E9_C025_41CA_3B6A9B2B451B",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_CB925437_C7BF_BB12_41DD_4D6DF926FE0D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "repeat": 1,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE317EF5_C9E9_402F_41BE_793DC5212E7C",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBD7DBA_C9E9_C025_41E6_4212D59B83A1",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBD2DBA_C9E9_C025_41BD_25D66C4F5353",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D086984F_C7FE_AB72_41CF_05E72ABF4111_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBDDDBA_C9E9_C025_41E2_0C7F37626604",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCC3CDB9_C9E9_C027_41E1_208399A03A51",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D0AFEEDF_C7FE_A712_41D2_BE822EA35537_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBC6DBA_C9E9_C025_41DF_C3807D5DC003",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D0818886_C7FE_EBF2_41D3_DD95B9AE69A9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBF6DBB_C9E9_C01B_41DE_565163A40858",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBC3DBA_C9E9_C025_41CB_FDABBF602304",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_DEEEDF5F_C7C6_6512_41E2_0FC33C6788DD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBCCDBA_C9E9_C025_41DA_46074B1D9E4A",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBE2DBB_C9E9_C01B_41D1_B526FC4EC2AB",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D0BAEEEE_C7FE_A732_41E8_895A32203AF0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCBEDDBB_C9E9_C01B_41C0_467598C6AD2A",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3156367_CA26_C02C_41D8_10546F916F99",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_D0B5A576_C7FE_E512_4192_1CEE33B1526D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DCC31DB9_C9E9_C027_41C5_F0BBE5BEF826",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "width": 536.8,
 "verticalAlign": "top",
 "fontColor": "#000000",
 "right": -14.35,
 "borderRadius": 0,
 "text": "Espaço Super Mulher",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": -5.2,
 "class": "Label",
 "height": 75,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 61,
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "paddingRight": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 60,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 58,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 58,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "Container black"
 },
 "backgroundOpacity": 0.4,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 0,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "maxHeight": 80,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "verticalAlign": "middle",
 "width": 50,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "40%",
 "transparencyActive": true,
 "class": "IconButton",
 "bottom": "40%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "width": "90%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "Container"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "maxHeight": 50,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "verticalAlign": "middle",
 "right": 9,
 "width": 50,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "40%",
 "transparencyActive": true,
 "class": "IconButton",
 "bottom": "40%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "100%",
 "horizontalAlign": "center",
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 20,
 "gap": 0,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 50,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "borderRadius": 0,
 "width": "25%",
 "minHeight": 50,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": "75%",
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 140,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailWidth": 220,
 "itemPaddingLeft": 3,
 "borderRadius": 5,
 "itemMaxWidth": 1000,
 "scrollBarWidth": 10,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "class": "ThumbnailGrid",
 "paddingLeft": 70,
 "itemLabelPosition": "bottom",
 "selectedItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadow": true,
 "propagateClick": true,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": false,
 "height": "92%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarVisible": "rollOver",
 "itemThumbnailOpacity": 1,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelGap": 7,
 "selectedItemThumbnailShadow": true,
 "itemOpacity": 1,
 "paddingRight": 70,
 "itemBackgroundColorDirection": "vertical",
 "backgroundOpacity": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemMode": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "minHeight": 1,
 "selectedItemLabelFontWeight": "bold",
 "itemWidth": 220,
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "shadow": false,
 "paddingTop": 10,
 "minWidth": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "itemLabelFontFamily": "Oswald",
 "itemHeight": 160,
 "itemLabelTextDecoration": "none",
 "itemThumbnailHeight": 125,
 "scrollBarColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "itemLabelFontStyle": "italic",
 "itemBorderRadius": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelHorizontalAlign": "center",
 "gap": 26,
 "itemVerticalAlign": "top"
},
{
 "paddingBottom": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "insetBorder": false,
 "height": "100%",
 "data": {
  "name": "WebFrame"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "borderRadius": 0,
 "width": "25%",
 "minHeight": 50,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": "75%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "playbackBarProgressBorderSize": 0,
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "MapViewer",
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "progressOpacity": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarRight": 0,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "progressRight": 0,
 "class": "ViewerArea",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "playbackBarBorderColor": "#FFFFFF",
 "borderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "progressLeft": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "99.975%",
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "toolTipPaddingTop": 4,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowOpacity": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "progressBarBorderColor": "#0066FF",
 "progressBarBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "minHeight": 1,
 "top": 0,
 "progressBottom": 2,
 "toolTipTextShadowColor": "#000000",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "shadow": false,
 "toolTipShadowSpread": 0,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipOpacity": 0.18,
 "toolTipFontSize": "12px",
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBarBorderRadius": 0,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipTextShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 140,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "Container photo"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "width": "55%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "100%",
 "horizontalAlign": "center",
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 20,
 "gap": 0,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "width": "45%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 60,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "borderRadius": 0,
 "width": "25%",
 "minHeight": 50,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": "75%",
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 40,
 "gap": 10,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "width": "99.731%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 40,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 40,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "- Buttons set"
 },
 "backgroundOpacity": 0.7,
 "paddingRight": 40,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 0,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Image",
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "height": 60,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 30,
 "gap": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 40,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "borderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "transparencyActive": false,
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "borderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "transparencyActive": false,
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "playbackBarProgressBorderSize": 0,
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "progressOpacity": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarRight": 0,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "progressRight": 0,
 "class": "ViewerArea",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "playbackBarBorderColor": "#FFFFFF",
 "borderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "progressLeft": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "toolTipPaddingTop": 4,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowOpacity": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "progressBarBorderColor": "#0066FF",
 "progressBarBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "minHeight": 1,
 "top": "0%",
 "progressBottom": 2,
 "toolTipTextShadowColor": "#000000",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "shadow": false,
 "toolTipShadowSpread": 0,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipOpacity": 0.18,
 "toolTipFontSize": "12px",
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBarBorderRadius": 0,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipTextShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "borderRadius": 0,
 "width": "14.22%",
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "transparencyActive": false,
 "class": "IconButton",
 "bottom": "20%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "right": 10,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "borderRadius": 0,
 "width": "14.22%",
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "transparencyActive": false,
 "class": "IconButton",
 "bottom": "20%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "borderRadius": 0,
 "width": "10%",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "transparencyActive": false,
 "class": "IconButton",
 "height": "10%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "verticalAlign": "bottom",
 "borderRadius": 0,
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Image",
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 0,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "5%",
 "horizontalAlign": "right",
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 30,
 "gap": 10,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 40,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "verticalAlign": "top",
 "borderRadius": 0,
 "width": "100%",
 "minHeight": 30,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Image",
 "height": "25%",
 "propagateClick": true,
 "shadow": false,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.jpg",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 40,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 0,
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "26%",
 "class": "Container",
 "bottom": "26%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Level 1"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 5,
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "bottom": "0%",
 "height": 130,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Container footer"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 0,
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "25%",
 "class": "Container",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Level 2-1"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "gap": 0,
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "25%",
 "class": "Container",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "gap": 0,
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "25%",
 "class": "Container",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "gap": 0,
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "25%",
 "class": "Container",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "gap": 0,
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "25%",
 "class": "Container",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "gap": 0,
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "25%",
 "class": "Container",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "vertical",
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "class": "HTMLText",
 "height": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.48vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.48vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.48vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.48vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.65vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.48vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.48vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.81vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 50,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "LOREM IPSUM",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "2.39vh",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button"
 },
 "backgroundOpacity": 0.7,
 "layout": "horizontal",
 "paddingRight": 0,
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ],
 "iconWidth": 32
},
{
 "paddingBottom": 0,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "width": "100%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "HTMLText",
 "height": "46%",
 "minHeight": 1,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 10,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "75%",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "- content"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "RECEP\u00c7\u00c3O >",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_EBB15899_CE7B_C0E7_41D8_2B78A49566E3, -157.9591836734694, -17.63265306122448);; this.mainPlayList.set('selectedIndex', 4)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button Tour Info"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 23,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "SALA MASSAGEM >",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_EBB1E899_CE7B_C0E7_41D3_83661D5051CA, 57.30612244897957, -10.285714285714276);; this.mainPlayList.set('selectedIndex', 5)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button Panorama List"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "width": "73.064%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "SAL\u00c3O >",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_EBB06899_CE7B_C0E7_41AA_732118C8447E, 49.22448979591839, -7.346938775510204);; this.mainPlayList.set('selectedIndex', 7)",
 "fontStyle": "italic",
 "fontSize": 18,
 "pressedLabel": "Inserdt Text",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button Location"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "LOJA >",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_EBB0F89A_CE7B_C0E5_41AA_E9A337B94466, 8.081632653061234, -0.7346938775510309);; this.mainPlayList.set('selectedIndex', 3)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button Floorplan"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 2,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "blue line"
 },
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 0,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "width": "100%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "HTMLText",
 "height": 78,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 7,
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 56,
 "minHeight": 1,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "gap": 7,
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 44,
 "minHeight": 1,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "BACK",
 "rollOverFontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 8,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Main Entrance",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "rollOverShadowBlurRadius": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 23,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lobby",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Reception",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "pressedLabel": "Reception",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Meeting Area 1",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Meeting Area 2",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Bar",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Chill Out",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Terrace",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Garden",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "visible": false,
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 18,
 "horizontalAlign": "left",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "visible": false,
 "layout": "horizontal",
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "BACK",
 "rollOverFontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 8,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "rollOverShadowBlurRadius": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 23,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 18,
 "horizontalAlign": "left",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "BACK",
 "rollOverFontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 8,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "rollOverShadowBlurRadius": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 23,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 18,
 "horizontalAlign": "left",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "BACK",
 "rollOverFontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 8,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "rollOverShadowBlurRadius": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 23,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 18,
 "horizontalAlign": "left",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "BACK",
 "rollOverFontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 8,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "rollOverShadowBlurRadius": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 23,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 18,
 "horizontalAlign": "left",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 50,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "BACK",
 "rollOverFontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 30
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "gap": 10,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "height": 8,
 "minHeight": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 15,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "rollOverShadowBlurRadius": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 23,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "fontSize": 18,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "gap": 5,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "class": "Button",
 "shadowBlurRadius": 6,
 "height": 36,
 "shadowSpread": 1,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 18,
 "horizontalAlign": "left",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32
},
{
 "paddingBottom": 0,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "maxHeight": 200,
 "maxWidth": 200,
 "verticalAlign": "top",
 "borderRadius": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "width": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Image",
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 10,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "width": "75%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "class": "HTMLText",
 "height": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.48vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.48vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.9vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.9vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.9vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.9vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingRight": 10,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 44,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": 44,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": 44,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": 44,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "height": 44,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": 44,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": 44,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "paddingRight": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "verticalAlign": "middle",
 "width": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "height": 50,
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "paddingRight": 0,
 "backgroundOpacity": 0
}],
 "borderRadius": 0,
 "defaultVRPointer": "laser",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "downloadEnabled": true,
 "height": "100%",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scripts": {
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } }
 },
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "paddingRight": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
