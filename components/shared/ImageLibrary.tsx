"use client";

import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ImageLibrary = ({ photos }: any) => {
	const [index, setIndex] = useState(-1);
	return (
		<div>
			<RowsPhotoAlbum
				photos={photos}
				targetRowHeight={150}
				onClick={({ index }) => setIndex(index)}
			/>{" "}
			<Lightbox
				slides={photos}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				// enable optional lightbox plugins
				plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
			/>
		</div>
	);
};

export default ImageLibrary;
