// Generated with Sketch 60

declare class BCReadWriteLock extends NSObject {
	/* typeEncoding=v16@0:8 */
	dealloc(): void;
	/* typeEncoding=@16@0:8 */
	init(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	protectedRead(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	protectedWrite(...args: any[]): any;
}

declare class MSArtboardGroup extends _MSArtboardGroup /* implements MSArtboardGroup, MSRootLayer, MSLayerWithMutableBackgroundColor, MSColorConvertible */ {
	/* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	CGTransformForFrame(): CGAffineTransform;
	/* typeEncoding=@"MSColor", ivar=(null), attributes=(retain,nonatomic) */
	backgroundColor(): MSColor;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	bounds(): CGRect;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	contentBounds(): CGRect;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"MSSimpleGrid", ivar=(null), attributes=(copy,nonatomic) */
	grid(): MSSimpleGrid;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasBackgroundColor(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hasTransforms(): boolean;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
	horizontalRulerData(): MSRulerData;
	/* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedVertical(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isLayerExportable(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isVisible(): boolean;
	/* typeEncoding=@"MSLayoutGrid", ivar=(null), attributes=(copy,nonatomic) */
	layout(): MSLayoutGrid;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	objectID(): NSString;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	origin(): CGPoint;
	/* typeEncoding=@"MSArtboardPreset", ivar=(null), attributes=(retain,nonatomic) */
	preset(): MSArtboardPreset;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rect(): CGRect;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rotation(): number;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
	rulerBase(): CGPoint;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
	verticalRulerData(): MSRulerData;

	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
	static artboardRectFromLayersInArray(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	static traits(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v16@0:8 */
	adjustAfterInsert(): void;
	/* typeEncoding=v32@0:8@16@24 */
	applyScreenPickerColor_preferredStyleName(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	badgeImages(...args: any[]): any;
	/* typeEncoding={CGSize=dd}16@0:8 */
	calculateMinimumSize(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canBeHidden(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canBeTransformed(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canChangeBooleanOperation(...args: any[]): any;
	/* typeEncoding=c32@0:8@16@24 */
	canCopyToLayer_beforeLayer(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canRotate(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	closestClippingLayer(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	constrainProportions(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	contentBounds(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	convertColorsUsing(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	defaultArtboardStyle(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	displayName(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	displayType(...args: any[]): any;
	/* typeEncoding=c24@0:8q16 */
	fixGeometryWithOptions(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasClickThrough(...args: any[]): any;
	/* typeEncoding=c40@0:8{CGPoint=dd}16d32 */
	hitTestInNameLabel_zoomValue(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	immutableBackgroundColor(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	inspectorSections(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isAutomaticScalingEnabled(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isExpanded(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isLocked(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isOpen(...args: any[]): any;
	/* typeEncoding=c24@0:8Q16 */
	isSelectableOnCanvasWithOptions(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	layerDidEndResize(): void;
	/* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48 */
	layerDidResizeFromRect_corner(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGVector=dd}16 */
	moveBySuggestedOffset(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	moveChildrenToIdenticalPositionAfterResizeFromRect(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	objectDidInit(): void;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	optimalBoundingBox(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	otherArtboardUnderArtboard(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentArtboard(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentForInsertingLayers(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentRoot(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=@16@0:8 */
	preset(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	resizeToFitChildren(): void;
	/* typeEncoding=@16@0:8 */
	rootForNameUniquing(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	rotation(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	rulerBase(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	rulerCoordinateSpace(...args: any[]): any;
	/* typeEncoding=@48@0:8{CGPoint=dd}16Q32d40 */
	selectionHitTest_options_zoomValue(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCenter(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsLocked(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsVisible(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setOrigin(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPreset(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setRect(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setRulerBase(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setShouldBreakMaskChain(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldGrowSizeOfGroupForInferredLayout(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldRefreshOverlayForFlows(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldRoundCoordinates(...args: any[]): any;
}

declare class MSColor extends _MSColor /* implements MSAsset, MSColor */ {
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	alpha(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	blue(): number;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	green(): number;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	red(): number;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;

	/* typeEncoding=@16@0:8 */
	static blackColor(...args: any[]): any;
	/* typeEncoding=@48@0:8d16d24d32d40 */
	static colorWithHue_saturation_brightness_alpha(...args: any[]): any;
	/* typeEncoding=@48@0:8d16d24d32d40 */
	static colorWithHue_saturation_lightness_alpha(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static colorWithNSColor(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static colorWithRGBADictionary(...args: any[]): any;
	/* typeEncoding=@48@0:8d16d24d32d40 */
	static colorWithRed_green_blue_alpha(...args: any[]): any;
	/* typeEncoding=@40@0:8q16q24q32 */
	static rgbColorRed_green_blue(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	static whiteColor(...args: any[]): any;

	/* typeEncoding=@24@0:8@16 */
	NSColorWithColorSpace(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	RGBADictionary(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	assetType(...args: any[]): any;
	/* typeEncoding=@24@0:8d16 */
	colorWithAlphaComponent(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	description(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	fuzzyIsEqual(...args: any[]): any;
	/* typeEncoding=c32@0:8@16d24 */
	fuzzyIsEqual_precision(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	fuzzyIsEqualExcludingAlpha(...args: any[]): any;
	/* typeEncoding=c32@0:8@16d24 */
	fuzzyIsEqualExcludingAlpha_precision(...args: any[]): any;
	/* typeEncoding=v40@0:8^d16^d24^d32 */
	getHue_saturation_brightness(...args: any[]): any;
	/* typeEncoding=v40@0:8^d16^d24^d32 */
	getHue_saturation_lightness(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	hash(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	hexIsEqual(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	initWithImmutableObject(...args: any[]): any;
	/* typeEncoding=@48@0:8d16d24d32d40 */
	initWithRed_green_blue_alpha(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isAssetEqual(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqual(...args: any[]): any;
	/* typeEncoding=@24@0:8d16 */
	scaledColor(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	treeAsDictionary(...args: any[]): any;
}

declare class MSCurvePoint extends _MSCurvePoint /* implements MSCurvePoint, NSCopying */ {
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isEffectivelyStraight(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isStraight(): boolean;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;

	/* typeEncoding=@16@0:8 */
	static point(...args: any[]): any;
	/* typeEncoding=@32@0:8{CGPoint=dd}16 */
	static pointWithPoint(...args: any[]): any;
	/* typeEncoding=@64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
	static pointWithPoint_curveTo_curveFrom(...args: any[]): any;

	/* typeEncoding=v32@0:8q16Q24 */
	changeCurveModeTo_usingPoint(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	currentBehaviour(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	description(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	inferCurveMode(): void;
	/* typeEncoding=@32@0:8{CGPoint=dd}16 */
	initWithPoint(...args: any[]): any;
	/* typeEncoding=@64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
	initWithPoint_curveTo_curveFrom(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isEffectivelyStraight(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isRounded(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isStraight(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}24@0:8Q16 */
	locationOfPoint(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	moveCurveFromTo(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	moveCurveToTo(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	movePointTo(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	multiplyBy(...args: any[]): any;
}

declare class MSDocumentData extends _MSDocumentData /* implements MSLayerContainment, MSDocumentData */ {
	/* typeEncoding=c, ivar=_autoExpandGroupsInLayerList, attributes=(assign,nonatomic) */
	autoExpandGroupsInLayerList(): boolean;
	/* typeEncoding=@"BCCache", ivar=_cache, attributes=(retain,nonatomic) */
	cache(): BCCache;
	/* typeEncoding=@"MSPage", ivar=(null), attributes=(retain,nonatomic) */
	currentPage(): MSPage;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"<MSDocumentDataDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
	delegate(): MSDocumentDataDelegate;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"MSFontList", ivar=_fontList, attributes=(retain,nonatomic) */
	fontList(): MSFontList;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=@"MSImmutableDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
	immutableDocumentDataMetadataCopy(): MSImmutableDocumentData;
	/* typeEncoding=@"NSDictionary", ivar=_metadata, attributes=(retain,nonatomic) */
	metadata(): NSDictionary;
	/* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
	pages(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_selectedOverrides, attributes=(retain,nonatomic) */
	selectedOverrides(): NSArray;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=@"NSDictionary", ivar=_symbolMap, attributes=(assign,nonatomic,readonly) */
	symbolMap(): NSDictionary;
	/* typeEncoding=@"NSData", ivar=_textPreviewData, attributes=(retain,nonatomic) */
	textPreviewData(): NSData;
	/* typeEncoding=@"NSData", ivar=_textPreviewMetadata, attributes=(retain,nonatomic) */
	textPreviewMetadata(): NSData;

	/* typeEncoding=v16@0:8 */
	static initialize(): void;
	/* typeEncoding=@32@0:8@16@24 */
	static libraryForForeignObject_inLibraries(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	UIMetadataKey(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	addBlankPage(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addSymbolMaster(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	allArtboards(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	allForeignObjects(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	allLayerStyles(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	allSymbols(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	allTextStyles(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	artboardWithID(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	assignColorSpace(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	autoExpandGroupsInLayerList(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	cache(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	containedLayers(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	containedLayersCount(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsMultipleLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsNoOrOneLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsOneLayer(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	convertToColorSpace(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	correctInvalidGamma(): void;
	/* typeEncoding=@16@0:8 */
	currentPage(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	dealloc(): void;
	/* typeEncoding=@16@0:8 */
	defaultPagesArray(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	delegate(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	documentData(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	documentIsEmpty(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateColorConvertiblesIgnoringForeignSymbols(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24@?32 */
	enumerateForeignObjects_withLibraries_block(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateLayers(...args: any[]): any;
	/* typeEncoding=c32@0:8Q16@?24 */
	enumerateLayersWithOptions_block(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	firstLayer(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	fixDuplicateArtboardObjectIDs(): void;
	/* typeEncoding=@16@0:8 */
	fontList(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	images(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	immutableDocumentDataMetadataCopy(...args: any[]): any;
	/* typeEncoding=Q24@0:8@16 */
	indexOfLayer(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	invalidateAffectedSymbolInstances(): void;
	/* typeEncoding=v16@0:8 */
	invalidateFonts(): void;
	/* typeEncoding=@16@0:8 */
	lastLayer(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	layerAtIndex(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	layerStyleWithID(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	layerWithID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layersByObjectID(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	libraryForForeignObject_inLibraries(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	localSymbols(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	metadata(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	metadataForKey_object(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	nameForNewPage(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	object_didChangeProperty(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	objectDidInit(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	populateDictionary_withChildrenOf(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	purgeForeignObjects(): void;
	/* typeEncoding=v16@0:8 */
	purgeForeignStyles(): void;
	/* typeEncoding=v16@0:8 */
	purgeForeignSymbols(): void;
	/* typeEncoding=v16@0:8 */
	refreshOverlay(): void;
	/* typeEncoding=v28@0:8@16c24 */
	removePages_detachInstances(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeShareableObjectsFromInstanceOverrides(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	replaceExistingCreationMetadata(): void;
	/* typeEncoding=v24@0:8@16 */
	replaceFonts(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24c32c36 */
	replaceInstancesOfColor_withColor_ignoreAlphaWhenMatching_replaceAlphaOfOriginalColor(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	selectedLayers(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	selectedOverrides(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setAutoExpandGroupsInLayerList(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setCache(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setCurrentPage(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setCurrentPageIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setDelegate(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFontList(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setMetadata(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSelectedOverrides(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setTextPreviewData(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setTextPreviewMetadata(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	sharedObjectContainerOfType(...args: any[]): any;
	/* typeEncoding=v28@0:8@16c24 */
	sketchrunnerMSDocumentData_removePages_detachInstances(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	sketchrunnerMSDocumentData_setCurrentPage(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24@32 */
	storeMetadata_forKey_object(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	stylesReferencedInDocument(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolMap(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	symbolWithID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolsPage(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolsPageOrCreateIfNecessary(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	symbolsReferencedByInstances(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolsReferencedBySymbolInstances(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolsReferencedBySymbolMasters(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	temporarilyHideSelectionForLayers(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	textPreviewData(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	textPreviewMetadata(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	textStyleWithID(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	updateForeignSymbolsPreservingOverridesInBlock(...args: any[]): any;
}

declare class MSForeignObjectProvider extends NSObject /* implements MSForeignObjectProvider */ {
	/* typeEncoding=@"MSDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
	currentDocument(): MSDocumentData;
	/* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,readonly,weak) */
	document(): MSDocument;
	/* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
	foreignObjects(): NSArray;
	/* typeEncoding=@"MSAssetLibraryController", ivar=(null), attributes=(assign,nonatomic,readonly) */
	libraryController(): MSAssetLibraryController;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
	objectType(): number;

	/* typeEncoding=@32@0:8@16@24 */
	static providerForLayers_inDocument(...args: any[]): any;
	/* typeEncoding=Q24@0:8@16 */
	static shareableObjectTypeForLayers(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	currentDocument(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	currentDocumentIsLibrary(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	document(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignObjects(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	initWithDocument(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	libraryController(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	localObjectsForDocument(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	masterIsOutOfSyncWithInstance(...args: any[]): any;
	/* typeEncoding=^{MSModelObject=#@@c}24@0:8@16 */
	masterObjectForInstance(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	objectType(...args: any[]): any;
	/* typeEncoding=^{MSModelObject=#@@c}32@0:8@16Q24 */
	shareableObjectForInstance_inContainerOfType(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	tempDocument(...args: any[]): any;
}

declare class MSLayer extends _MSLayer /* implements MSLayerListLayerExtensions, MSSnappable, MSHoverableItem, MSLayerContainment, MSEnumerableLayer, MSLayerCoordinateSpace, MSLayer, NSCopying, MSRectDelegate */ {
	/* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	CGTransformForFrame(): CGAffineTransform;
	/* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	CGTransformForFrame(): CGAffineTransform;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
	absoluteCenter(): CGPoint;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	absoluteIsFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	absoluteIsFlippedVertical(): boolean;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
	absolutePosition(): CGPoint;
	/* typeEncoding=@"MSAbsoluteRect", ivar=_absoluteRect, attributes=(retain,nonatomic) */
	absoluteRect(): MSAbsoluteRect;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	absoluteRotation(): number;
	/* typeEncoding=@"MSImmutableLayerAncestry", ivar=(null), attributes=(assign,nonatomic,readonly) */
	ancestry(): MSImmutableLayerAncestry;
	/* typeEncoding=@"MSTintedImages", ivar=(null), attributes=(assign,nonatomic,readonly) */
	badgeImages(): MSTintedImages;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
	badgeType(): number;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	baselineAnchor(): MSLayoutPosition;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	bottomAnchor(): MSLayoutPosition;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	bounds(): CGRect;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	bounds(): CGRect;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	bounds(): CGRect;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	canChangeBooleanOperation(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	canFixBottom(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	canFixHeight(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	canFixLeft(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	canFixRight(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	canFixTop(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	canFixWidth(): boolean;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
	center(): CGPoint;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	centerXAnchor(): MSLayoutPosition;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	centerYAnchor(): MSLayoutPosition;
	/* typeEncoding=@"NSHashTable", ivar=_changeObservers, attributes=(retain,nonatomic) */
	changeObservers(): NSHashTable;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	constrainProportions(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	containedByHiddenAncestorNode(): boolean;
	/* typeEncoding=@"MSLayer", ivar=(null), attributes=(assign,nonatomic,readonly) */
	coordinateSpace(): MSLayer;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(retain,nonatomic) */
	dataSupplierIdentifier(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
	displayType(): number;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	expandableInLayerList(): boolean;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
	filterTypeMask(): number;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hasBadgedIcon(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasFixedBottom(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasFixedEdges(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasFixedHeight(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasFixedLeft(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasFixedRight(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasFixedTop(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasFixedWidth(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hasTransforms(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hasTransforms(): boolean;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=@"MSLayoutDimension", ivar=(null), attributes=(assign,nonatomic,readonly) */
	heightAnchor(): MSLayoutDimension;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hiddenOnCanvas(): boolean;
	/* typeEncoding=@"MSLayer", ivar=(null), attributes=(assign,nonatomic,readonly) */
	hoveredLayer(): MSLayer;
	/* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
	/* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isActive(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isActivePartInBooleanOperation(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isEditableInLayerList(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isExpanded(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isExpanded(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isExportableViaDragAndDrop(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedVertical(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedVertical(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isLayerExportable(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isLayerExportable(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isSelected(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isSelectedInLayerList(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isVisible(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isVisible(): boolean;
	/* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic) */
	layerListExpandedType(): number;
	/* typeEncoding=@, ivar=(null), attributes=(assign,nonatomic,readonly) */
	layerListImmutable(): any;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	leftAnchor(): MSLayoutPosition;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	lockedOnCanvas(): boolean;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	midXHeightAnchor(): MSLayoutPosition;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	name(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(retain,nonatomic) */
	nodeName(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	objectID(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	objectID(): NSString;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	origin(): CGPoint;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
	origin(): CGPoint;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	outlineViewNodeIdentifier(): NSString;
	/* typeEncoding=@"MSArtboardGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
	parentArtboard(): MSArtboardGroup;
	/* typeEncoding=@"<MSLayerCoordinateSpace>", ivar=(null), attributes=(assign,nonatomic,readonly) */
	parentCoordinateSpace(): MSLayerCoordinateSpace;
	/* typeEncoding=@"MSPage", ivar=(null), attributes=(assign,nonatomic,readonly,weak) */
	parentPage(): MSPage;
	/* typeEncoding=@"MSPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
	pathInBounds(): MSPath;
	/* typeEncoding=@"MSPath", ivar=(null), attributes=(copy,nonatomic,readonly) */
	pathInFrame(): MSPath;
	/* typeEncoding=@"MSPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
	pathInFrameWithTransforms(): MSPath;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	previewShouldIndicateSharedStyle(): boolean;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	proportions(): number;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rect(): CGRect;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic) */
	rect(): CGRect;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	rightAnchor(): MSLayoutPosition;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rotation(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rotation(): number;
	/* typeEncoding=@"<MSLayerCoordinateSpace>", ivar=(null), attributes=(assign,nonatomic,readonly) */
	rulerCoordinateSpace(): MSLayerCoordinateSpace;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
	shareableObjectType(): number;
	/* typeEncoding=@"MSModelObject<BCSortable><MSSharedObjectStyling>", ivar=(null), attributes=(assign,nonatomic,readonly) */
	sharedMaster(): MSModelObject;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;
	/* typeEncoding=@"MSLayoutPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
	topAnchor(): MSLayoutPosition;
	/* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	transformForConvertingFromParentCoordinateSpace(): CGAffineTransform;
	/* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	transformForConvertingToParentCoordinateSpace(): CGAffineTransform;
	/* typeEncoding={_CHTransformStruct=dccc}, ivar=(null), attributes=(assign,nonatomic) */
	transformStruct(): _CHTransformStruct;
	/* typeEncoding=@"<MSLayerCoordinateSpace>", ivar=(null), attributes=(assign,nonatomic,readonly) */
	unitCoordinateSpace(): MSLayerCoordinateSpace;
	/* typeEncoding=@"MSStyle", ivar=(null), attributes=(assign,nonatomic,readonly) */
	usedStyle(): MSStyle;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	userVisibleRotation(): number;
	/* typeEncoding=@"MSLayoutDimension", ivar=(null), attributes=(assign,nonatomic,readonly) */
	widthAnchor(): MSLayoutDimension;

	/* typeEncoding=v40@0:8@16d24@32 */
	static alignLayers_toValue_forKey(...args: any[]): any;
	/* typeEncoding=v44@0:8@16Q24@32c40 */
	static alignLayers_withMode_toKey_pixelFit(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
	static alignmentRectForLayers(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	static defaultName(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	static keyPathsForValuesAffectingBadgeMap(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	static keyPathsForValuesAffectingNodeName(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	static keyPathsForValuesAffectingUserVisibleRotation(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static layerWithPath(...args: any[]): any;
	/* typeEncoding=v32@0:8@16q24 */
	static makeLayerNamesUnique_withOptions(...args: any[]): any;
	/* typeEncoding=d24@0:8d16 */
	static normalizeUserVisibleRotation(...args: any[]): any;
	/* typeEncoding=d24@0:8d16 */
	static rotationForUserVisibleRotation(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	static traits(...args: any[]): any;
	/* typeEncoding=d24@0:8d16 */
	static userVisibleRotationForRotation(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
	CGTransformForFrame(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	CSSAttributeString(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	CSSAttributes(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	CSSTransformString(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	absoluteCenter(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	absoluteInfluenceRect(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	absoluteIsFlippedHorizontal(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	absoluteIsFlippedVertical(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	absolutePosition(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	absoluteRect(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	absoluteRotation(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addChangeObserver(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	adjustAfterInsert(): void;
	/* typeEncoding=Q16@0:8 */
	adjustedResizingConstraint(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16Q24 */
	alignmentRectInCoordinateSpace_options(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	allSymbolInstancesInChildren(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	ancestors(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	ancestorsAndSelf(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	ancestorsAndSelfTransforms(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	ancestorsOrSelfHaveInferredLayout(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	ancestry(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	applyOverride_document(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24@32 */
	applyOverrides_document_visitedSymbols(...args: any[]): any;
	/* typeEncoding=v32@0:8d16@24 */
	applyRotation_explicitRotationCenter(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	applyScreenPickerColor_preferredStyleName(...args: any[]): any;
	/* typeEncoding=v32@0:8d16@24 */
	applyUserVisibleRotation_explicitRotationCenter(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	badgeImages(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	badgeMenuConfigurator(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	badgeType(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	baselineAnchor(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	beginEditingFrame(): void;
	/* typeEncoding=@16@0:8 */
	bottomAnchor(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	bounds(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	boundsOfParentLayer(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	cachedPreviewIconWithState(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16@?24 */
	calculateLayerListPreviewForState_withCompletionHandler(...args: any[]): any;
	/* typeEncoding={CGSize=dd}16@0:8 */
	calculateMinimumSize(...args: any[]): any;
	/* typeEncoding=q24@0:8Q16 */
	calculatePreviewIconTraitsForState(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	calculateProportions(): void;
	/* typeEncoding=c16@0:8 */
	canBeHidden(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	canBeHoveredOnPage(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canBeTransformed(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canChangeBooleanOperation(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	canContainLayer(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canConvertToOutlines(...args: any[]): any;
	/* typeEncoding=c32@0:8@16@24 */
	canCopyToLayer_beforeLayer(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canFixBottom(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canFixHeight(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canFixLeft(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canFixRight(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canFixTop(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canFixWidth(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canLockProportions(...args: any[]): any;
	/* typeEncoding=c32@0:8@16@24 */
	canMoveToLayer_beforeLayer(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canRotate(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canScale(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canSmartRotate(...args: any[]): any;
	/* typeEncoding=c32@0:8Q16@24 */
	canSnap_toLayer(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	candidatesForMasking(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	center(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	centerXAnchor(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	centerYAnchor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	changeColor(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	changeObservers(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	changeValueForKeysInBlock(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	children(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	childrenForLayerList(...args: any[]): any;
	/* typeEncoding=@20@0:8c16 */
	childrenIncludingSelf(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	cloneDictionaryReplacingImages(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	closestClippingLayer(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	compareFrameFrom_withComparisonforPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	concatAncestorsAndSelfTransforms(): void;
	/* typeEncoding=v24@0:8@16 */
	configureBackgroundOfRequest(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	constrainProportions(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containedByHiddenAncestorNode(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	containedLayers(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	containedLayersCount(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsMultipleLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsNoOrOneLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsOneLayer(...args: any[]): any;
	/* typeEncoding=c48@0:8{CGPoint=dd}16Q32d40 */
	containsPoint_options_zoomValue(...args: any[]): any;
	/* typeEncoding=c48@0:8{CGPoint=dd}16Q32d40 */
	containsPointAsPath_options_zoomValue(...args: any[]): any;
	/* typeEncoding=c20@0:8c16 */
	containsSelectedItemIncludingSelf(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	contextualMenuPreviewTemplateImage(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
	convertPoint_fromCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
	convertPoint_fromLayer(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
	convertPoint_toCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
	convertPoint_toLayer(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
	convertRect_fromCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
	convertRect_toCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGVector=dd}40@0:8{CGVector=dd}16@32 */
	convertVector_fromCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGVector=dd}40@0:8{CGVector=dd}16@32 */
	convertVector_toCoordinateSpace(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	coordinateSpace(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	cornerRectType(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	dataSupplierIdentifier(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	debugQuickLookObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	displayName(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	displayType(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	duplicate(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	endEditingFrame(): void;
	/* typeEncoding=v32@0:8Q16@?24 */
	enumerateAnchorsForSnappingWithMask_usingBlock(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateLayers(...args: any[]): any;
	/* typeEncoding=c32@0:8Q16@?24 */
	enumerateLayersWithOptions_block(...args: any[]): any;
	/* typeEncoding=c40@0:8Q16#24@?32 */
	enumerateLayersWithOptions_classFilter_block(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	enumeratorWithOptions(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	expandableInLayerList(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	filterTypeMask(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	firstLayer(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16@?24 */
	followMaskChainForLayerAtIndex_usingBlock(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	frameForAlignmentRect(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	frameForTransforms(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	handleBadgeClickWithAltState(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	handleDoubleClick(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	handlerClass(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasBadgedIcon(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasClippingMask(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasEnabledBackgroundBlur(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFixedBottom(...args: any[]): any;
	/* typeEncoding=c24@0:8Q16 */
	hasFixedEdge(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFixedEdges(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFixedHeight(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFixedLeft(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFixedRight(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFixedTop(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFixedWidth(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasTransforms(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	heightAnchor(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hiddenOnCanvas(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hitTestAsPath(...args: any[]): any;
	/* typeEncoding=c48@0:8{CGPoint=dd}16@32d40 */
	hitTestPoint_inPath_zoomValue(...args: any[]): any;
	/* typeEncoding=c56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16Q48 */
	hitTestRect_options(...args: any[]): any;
	/* typeEncoding=@24@0:8d16 */
	hitTestablePathInBoundsForZoomValue(...args: any[]): any;
	/* typeEncoding=@24@0:8^{CGColor=}16 */
	hoverItemsWithColor(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	hoveredLayer(...args: any[]): any;
	/* typeEncoding=Q24@0:8@16 */
	indexOfLayer(...args: any[]): any;
	/* typeEncoding={BCEdgePaddings=dddd}16@0:8 */
	influenceRectEdgePaddingsThatCascadeToContainedLayers(...args: any[]): any;
	/* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	initWithFrame(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	inspectorSections(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	invalidateModelCacheGenerationForObject_property(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isActive(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isActivePartInBooleanOperation(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isEditableInLayerList(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isExpanded(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isExportableViaDragAndDrop(...args: any[]): any;
	/* typeEncoding=c48@0:8Q16{CGPoint=dd}24d40 */
	isLayerAtIndex_maskedAtPoint_zoomValue(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isLayerExportable(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isLine(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isMasked(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isOpen(...args: any[]): any;
	/* typeEncoding=c24@0:8Q16 */
	isOpenForSelectionWithOptions(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isPartOfClippingMask(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isRectIntegral(...args: any[]): any;
	/* typeEncoding=c24@0:8Q16 */
	isSelectableOnCanvasWithOptions(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isSelected(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isSelectedInLayerList(...args: any[]): any;
	/* typeEncoding=c24@0:8d16 */
	isTooSmallForPreciseHitTestingAtZoomValue(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	lastLayer(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	layerAtIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	layerDidEndResize(): void;
	/* typeEncoding=v24@0:8Q16 */
	layerDidResizeFromInspector(...args: any[]): any;
	/* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48 */
	layerDidResizeFromRect_corner(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layerListImmutable(...args: any[]): any;
	/* typeEncoding=@24@0:8q16 */
	layerListPreviewCacheKeyForTraits(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16@?24 */
	layerListPreviewForState_withCompletionHandler(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	layerWillStartResize(): void;
	/* typeEncoding=@24@0:8@16 */
	layerWithID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layersByConvertingToOutlines(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	layoutDirection(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	leftAnchor(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	limitsSelectionToBounds(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	lockedOnCanvas(...args: any[]): any;
	/* typeEncoding=v32@0:8@16q24 */
	makeNameUniqueInRoot_withOptions(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	makeNameUniqueWithOptions(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	makeOriginIntegral(): void;
	/* typeEncoding=v16@0:8 */
	makeRectIntegral(): void;
	/* typeEncoding=@24@0:8Q16 */
	maskIconWithState(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	matchesLayerListNode(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	midXHeightAnchor(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}40@0:8d16Q24q32 */
	minimumAdjustedRectForValue_axis_anchor(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGVector=dd}16 */
	moveBySuggestedOffset(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	moveInLayerTreeInBlock(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	moveToLayer_beforeLayer(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	multiplyBy(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	namesOfAllLayersInContainer(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	nodeName(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	notifyChangeObservers(): void;
	/* typeEncoding=v32@0:8@16@24 */
	object_didChangeProperty(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	objectDidInit(): void;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	origin(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	originalICMSLayer_layerDidEndResize(): void;
	/* typeEncoding=@16@0:8 */
	outlineViewNodeIdentifier(...args: any[]): any;
	/* typeEncoding=@40@0:8@16@24@32 */
	overridePointsWithParent_overrides_document(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	overrideSelectionPathItems(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentArtboard(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentCoordinateSpace(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentForInsertingLayers(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentPage(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentRoot(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentShape(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentSymbol(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pathForHoverInBounds(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pathInBounds(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	pathInCoordinateSpace(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pathInFrame(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pathInFrameWithTransforms(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=q24@0:8Q16 */
	previewIconTraitsForState(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	previewIconWithState(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	previewShouldIndicateSharedStyle(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	proportions(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	rect(...args: any[]): any;
	/* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
	rect_didChangeFromRect(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	refreshOverlay(): void;
	/* typeEncoding=v24@0:8@16 */
	removeChangeObserver(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeFromParent(): void;
	/* typeEncoding=v24@0:8@16 */
	replaceFonts(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	replaceWithInstanceOfSymbol(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	resetConstraints(): void;
	/* typeEncoding=v16@0:8 */
	resetFlow(): void;
	/* typeEncoding=v32@0:8{CGSize=dd}16 */
	resizeWithOldGroupSize(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	resizingConstraintKeys(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	rightAnchor(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	rootForNameUniquing(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	rotationDirection(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	rulerCoordinateSpace(...args: any[]): any;
	/* typeEncoding=v24@0:8c16c20 */
	select_byExpandingSelection(...args: any[]): any;
	/* typeEncoding=v28@0:8c16c20c24 */
	select_byExpandingSelection_showSelection(...args: any[]): any;
	/* typeEncoding=v24@0:8c16c20 */
	select_byExtendingSelection(...args: any[]): any;
	/* typeEncoding=v28@0:8c16c20c24 */
	select_byExtendingSelection_showSelection(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	selectableLayersWithOptions(...args: any[]): any;
	/* typeEncoding=Q24@0:8d16 */
	selectionCornerMaskWithZoomValue(...args: any[]): any;
	/* typeEncoding=@48@0:8{CGPoint=dd}16Q32d40 */
	selectionHitTest_options_zoomValue(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setAbsoluteCenter(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setAbsoluteIsFlippedHorizontal(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setAbsoluteIsFlippedVertical(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setAbsolutePosition(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setAbsoluteRect(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setAbsoluteRotation(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setBooleanOperation(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCenter(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setChangeObservers(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setConstrainProportions(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setDataSupplierIdentifier(...args: any[]): any;
	/* typeEncoding=v28@0:8c16Q20 */
	setFixed_forEdge(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasFixedBottom(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasFixedEdges(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasFixedHeight(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasFixedLeft(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasFixedRight(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasFixedTop(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasFixedWidth(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHeightRespectingProportions(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsVisible(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setNilValueForKey(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setNodeName(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setOrigin(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setProportions(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setRect(...args: any[]): any;
	/* typeEncoding=v32@0:8{_CHTransformStruct=dccc}16 */
	setTransformStruct(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	setValue_forUndefinedKey(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setWidthRespectingProportions(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	setupWithLayerBuilderDictionary(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	shareableObjectType(...args: any[]): any;
	/* typeEncoding=^{MSModelObject=#@@c}16@0:8 */
	sharedMaster(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	sharedStylesReferencedInDocument(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldDrawSelection(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldDrawSelectionStroke(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldFlattenAfterRotate(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	shouldHitTestOnFill(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldRefreshOverlayForFlows(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	sketchrunnerMSLayer_removeFromParent(): void;
	/* typeEncoding=@16@0:8 */
	styleForBooleanOperation(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	supportsInnerOuterBorders(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	supportsMultipleShadows(...args: any[]): any;
	/* typeEncoding=@24@0:8q16 */
	tintColorForTraits(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	topAnchor(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	traits(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	transform(...args: any[]): any;
	/* typeEncoding={CGAffineTransform=dddddd}24@0:8@16 */
	transformForConvertingFromCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
	transformForConvertingFromParentCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGAffineTransform=dddddd}24@0:8@16 */
	transformForConvertingToCoordinateSpace(...args: any[]): any;
	/* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
	transformForConvertingToParentCoordinateSpace(...args: any[]): any;
	/* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	transformForRect(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	transformRectToParentCoordinates(...args: any[]): any;
	/* typeEncoding={_CHTransformStruct=dccc}16@0:8 */
	transformStruct(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	unitCoordinateSpace(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	updateSharedStyleReferencesFrom_to(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	usedStyle(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	userVisibleRotation(...args: any[]): any;
	/* typeEncoding=c32@0:8^@16^@24 */
	validateNodeName_error(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	valueForUndefinedKey(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	widthAnchor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	writeBitmapImageToFile(...args: any[]): any;
}

declare class MSLayerGroup extends _MSLayerGroup /* implements MSLayerGroup */ {
	/* typeEncoding=Q, ivar=_disableAutomaticScalingCounter, attributes=(assign,nonatomic) */
	disableAutomaticScalingCounter(): number;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	hasInferredLayout(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isAutomaticScalingEnabled(): boolean;
	/* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
	layers(): NSArray;
	/* typeEncoding=q, ivar=_preCalculatedHasSelectedLayer, attributes=(assign,nonatomic) */
	preCalculatedHasSelectedLayer(): number;

	/* typeEncoding=@24@0:8@16 */
	static groupWithLayer(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static groupWithLayers(...args: any[]): any;

	/* typeEncoding=@16@0:8 */
	CSSAttributeString(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	ancestorsOrSelfHaveInferredLayout(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	applyTransformsToLayers(...args: any[]): any;
	/* typeEncoding={CGSize=dd}16@0:8 */
	calculateMinimumSize(...args: any[]): any;
	/* typeEncoding=q24@0:8Q16 */
	calculatePreviewIconTraitsForState(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	canContainLayer(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	candidatesForMasking(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	containedLayers(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	containedLayersCount(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsMultipleLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsNoOrOneLayers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	containsOneLayer(...args: any[]): any;
	/* typeEncoding=c20@0:8c16 */
	containsSelectedItemIncludingSelf(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	correctInvalidGamma(): void;
	/* typeEncoding=@16@0:8 */
	defaultLayout(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	defaultStyle(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	deselectLayerAndParent(): void;
	/* typeEncoding=Q16@0:8 */
	disableAutomaticScalingCounter(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	disableAutomaticScalingInBlock(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateLayers(...args: any[]): any;
	/* typeEncoding=v40@0:8Q16@?24@?32 */
	enumerateLayersAvoidingFaultingWithOptions_passingTest_usingBlock(...args: any[]): any;
	/* typeEncoding=c32@0:8Q16@?24 */
	enumerateLayersWithOptions_block(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	expandableInLayerList(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	firstLayer(...args: any[]): any;
	/* typeEncoding=c24@0:8q16 */
	fixGeometryWithOptions(...args: any[]): any;
	/* typeEncoding=c32@0:8q16Q24 */
	fixGeometryWithOptions_allowedAxes(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	groupBoundsShouldBeIntegral(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	handleDoubleClick(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasInferredLayout(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasStyleOrTransform(...args: any[]): any;
	/* typeEncoding=Q24@0:8@16 */
	indexOfLayer(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertLayer_afterLayerOrAtEnd(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	inspectorSections(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isAutomaticScalingEnabled(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isExpanded(...args: any[]): any;
	/* typeEncoding=c24@0:8Q16 */
	isOpenForSelectionWithOptions(...args: any[]): any;
	/* typeEncoding=c24@0:8Q16 */
	isSelectableOnCanvasWithOptions(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	lastLayer(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	layerAtIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	layerDidEndResize(): void;
	/* typeEncoding=v16@0:8 */
	layerWillStartResize(): void;
	/* typeEncoding=v24@0:8@?16 */
	moveInLayerTreeInBlock(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	moveLayersToParent(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	moveTransformsToChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	multiplyBy(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	objectDidInit(): void;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	optimalBoundingBox(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	optimalBoundingBoxInParentCoordinates(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentGroupRecursive(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pathForHoverInBounds(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=q16@0:8 */
	preCalculatedHasSelectedLayer(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	prepareAsMaskContainer(): void;
	/* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
	rect_didChangeFromRect(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGSize=dd}16 */
	resizeChildrenWithOldSize(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setDisableAutomaticScalingCounter(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasInferredLayout(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	setInferredLayoutOnAxis_direction(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPreCalculatedHasSelectedLayer(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setStyle(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldGrowSizeOfGroupForInferredLayout(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldRefreshOverlayForFlows(...args: any[]): any;
	/* typeEncoding=c48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	shouldResizeToFitBounds(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldStripShadowsAndInnerShadow(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	styleForBooleanOperation(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	translateChildrenFrameToLayers(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	ungroup(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	ungroupReturningNextUngroupGroup(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	ungroupSingleChildDescendentGroups(): void;
	/* typeEncoding=v32@0:8@16@24 */
	updateSharedStyleReferencesFrom_to(...args: any[]): any;
}

declare class MSModelObject extends MSModelObjectCommon /* implements NSCopying, MSModelObject */ {
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	UIMetadataKey(): NSString;
	/* typeEncoding=@, ivar=(null), attributes=(retain,nonatomic) */
	cachedImmutableModelObject(): any;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(assign,nonatomic,weak) */
	documentData(): MSDocumentData;
	/* typeEncoding=@"MSModelObject", ivar=(null), attributes=(assign,nonatomic,readonly) */
	foreignObject(): MSModelObject;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=@, ivar=(null), attributes=(assign,nonatomic,readonly) */
	immutableModelObject(): any;
	/* typeEncoding=c, ivar=_isFault, attributes=(assign,nonatomic) */
	isFault(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isForeign(): boolean;
	/* typeEncoding=@"MSModelObjectCacheGeneration", ivar=(null), attributes=(retain,nonatomic) */
	modelObjectCacheGeneration(): MSModelObjectCacheGeneration;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
	objectID(): NSString;
	/* typeEncoding=@"MSLayerGroup", ivar=(null), attributes=(assign,nonatomic,readonly,weak) */
	parentGroup(): MSLayerGroup;
	/* typeEncoding=@"MSModelObject", ivar=_parentObject, attributes=(assign,nonatomic,weak) */
	parentObject(): MSModelObject;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	static persistsObjectID(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	UIMetadataKey(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	breakConnectionWith(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	cachedImmutableModelObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	cachedValueForKey(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@?24 */
	cachedValueForKey_setUsingBlock(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	clearCache(): void;
	/* typeEncoding=v24@0:8@16 */
	clearCachedValueForKey(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=@24@0:8Q16 */
	copyWithOptions(...args: any[]): any;
	/* typeEncoding=@24@0:8^{_NSZone=}16 */
	copyWithZone(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	correctInvalidGamma(): void;
	/* typeEncoding=@16@0:8 */
	documentData(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	fireFault(): void;
	/* typeEncoding=v16@0:8 */
	fireFaultIfNecessary(): void;
	/* typeEncoding=@16@0:8 */
	foreignObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	immutableModelObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@?16 */
	initWithBlock(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	initWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	invaliateImmutableObject(): void;
	/* typeEncoding=v16@0:8 */
	invalidateImmutableObject(): void;
	/* typeEncoding=v16@0:8 */
	invalidateImmutableObjectAndAncestors(): void;
	/* typeEncoding=v16@0:8 */
	invalidateModelCacheGeneration(): void;
	/* typeEncoding=v32@0:8@16@24 */
	invalidateModelCacheGenerationForObject_property(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isDescendantOfObject(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isFault(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isForeign(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	metadataForKey(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	modelObjectCacheGeneration(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	object_didChangeProperty(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentGroup(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentGroupRecursive(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentObject(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	rootModelObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setCachedImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setDocumentData(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFault(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setModelObjectCacheGeneration(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setParentObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	storeMetadata_forKey(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	updateCachedValue_forKey(...args: any[]): any;
}

declare class MSModelObjectCommon extends NSObject /* implements MSModelObjectCommon */ {
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding=@"NSString", ivar=_objectID, attributes=(copy,nonatomic) */
	objectID(): NSString;
	/* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
	overridePointAttributeNamesForOverridePropertyMigration(): NSArray;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;

	/* typeEncoding=@16@0:8 */
	static defaultName(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	static generateObjectID(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	static persistsObjectID(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	static traits(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	appendSimpleStructureToString_withIndent(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	appendTreeStructureToString_withIndent(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	defaultName(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	description(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateDescendants(...args: any[]): any;
	/* typeEncoding=v32@0:8@?16@24 */
	enumerateDescendants_withAncestors(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	generateObjectID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	init(...args: any[]): any;
	/* typeEncoding=@24@0:8@?16 */
	initWithBlock(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	initWithMinimalSetup(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isContainedByInstanceOfForeignSymbol(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	objectDidInit(): void;
	/* typeEncoding=@16@0:8 */
	objectID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	overridePointAttributeNamesForOverridePropertyMigration(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=@16@0:8 */
	primitiveObjectID(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	recursivelyGenerateObjectID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setNilValueForKey(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setObjectID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	simpleTreeStructure(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	traits(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	treeAsDictionary(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	treeStructure(...args: any[]): any;
}

declare class MSRect extends _MSRect /* implements MSRect */ {
	/* typeEncoding=d, ivar=_bottom, attributes=(assign,nonatomic) */
	bottom(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	left(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	maxX(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	maxY(): number;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
	mid(): CGPoint;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	midX(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	midY(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	minX(): number;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	minY(): number;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
	origin(): CGPoint;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	primitiveConstrainProportions(): boolean;
	/* typeEncoding=d, ivar=_proportions, attributes=(assign,nonatomic) */
	proportions(): number;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic) */
	rect(): CGRect;
	/* typeEncoding=d, ivar=_right, attributes=(assign,nonatomic) */
	right(): number;
	/* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic) */
	size(): CGSize;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
	top(): number;

	/* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	static rectWithRect(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static rectWithUnionOfRects(...args: any[]): any;
	/* typeEncoding=@48@0:8d16d24d32d40 */
	static rectWithX_y_width_height(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	beginEditing(): void;
	/* typeEncoding=d16@0:8 */
	bottom(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	calculateProportions(): void;
	/* typeEncoding=c32@0:8{CGPoint=dd}16 */
	containsPoint(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	delegate(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	description(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	editedFromRect(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	endEditing(): void;
	/* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	initWithRect(...args: any[]): any;
	/* typeEncoding=@48@0:8d16d24d32d40 */
	initWithX_y_width_height(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqual(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isIntegral(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	left(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	log(): void;
	/* typeEncoding=v16@0:8 */
	makeOriginIntegral(): void;
	/* typeEncoding=v16@0:8 */
	makeRectIntegral(): void;
	/* typeEncoding=d16@0:8 */
	maxX(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	maxY(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	mid(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	midX(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	midY(...args: any[]): any;
	/* typeEncoding=d24@0:8Q16 */
	minForAxis(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	minX(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	minY(...args: any[]): any;
	/* typeEncoding=v40@0:8Q16Q24d32 */
	moveOriginOnAxis_toEdge_byAmount(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	objectDidInit(): void;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	origin(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	performUpdatesWithUnconstrainedProportions(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	primitiveConstrainProportions(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	processEditing(): void;
	/* typeEncoding=d16@0:8 */
	proportions(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	rect(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	right(...args: any[]): any;
	/* typeEncoding=@24@0:8d16 */
	scaleBy(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setBottom(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setConstrainProportions(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHeight(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setLeft(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMaxX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMaxY(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setMid(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMidX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMidY(...args: any[]): any;
	/* typeEncoding=v32@0:8d16Q24 */
	setMin_forAxis(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMinX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMinY(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setNilValueForKey(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setOrigin(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setPrimitiveConstrainProportions(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setProportions(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setRect(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setRectByIgnoringProportions(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRight(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGSize=dd}16 */
	setSize(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setTop(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setWidth(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setY(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldConstrainProportions(...args: any[]): any;
	/* typeEncoding={CGSize=dd}16@0:8 */
	size(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	top(...args: any[]): any;
}

declare class MSShapeGroup extends _MSShapeGroup /* implements MSShapeGroup, MSPathLayer */ {
	/* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	CGTransformForFrame(): CGAffineTransform;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	bounds(): CGRect;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=c, ivar=(null), attributes=(assign,dynamic,nonatomic) */
	edited(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hasMarkers(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hasTransforms(): boolean;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
	isClosed(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedVertical(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isLayerExportable(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isPartOfClippingMask(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isVisible(): boolean;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	objectID(): NSString;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	origin(): CGPoint;
	/* typeEncoding=@"MSPath", ivar=(null), attributes=(copy,dynamic,nonatomic) */
	pathInFrame(): MSPath;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rect(): CGRect;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rotation(): number;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;

	/* typeEncoding=v32@0:8@16@24 */
	static applyStyleForBooleanOperationFrom_toShapeGroup(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static groupWithLayers(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static layerWithPath(...args: any[]): any;
	/* typeEncoding=@32@0:8q16@24 */
	static shapeWithBooleanOperation_onLayers(...args: any[]): any;
	/* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	static shapeWithRect(...args: any[]): any;

	/* typeEncoding=@16@0:8 */
	CSSAttributeString(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	canContainLayer(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canFlatten(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canProbablyFlatten(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canRotate(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canSmartRotate(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	changeInnerOuterBordersIfHasOpenPaths(): void;
	/* typeEncoding=@16@0:8 */
	defaultName(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	edited(...args: any[]): any;
	/* typeEncoding=c24@0:8q16 */
	fixGeometryWithOptions(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	flatten(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	groupBoundsShouldBeIntegral(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	handleDoubleClick(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	handlerClass(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasBooleanOperations(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasFlattenablePath(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasLines(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasMarkers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hitTestAsPath(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	inspectorSections(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isClosed(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isHorizontalLine(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isPartOfClippingMask(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isVerticalLine(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	object_didChangeProperty(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	optimalBoundingBox(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pathForHoverInBounds(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v16@0:8 */
	reversePath(): void;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
	safeFrameForBezierPath(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setEdited(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsClosed(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPathInFrame(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setStyle(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldDrawSelectionStroke(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	shouldHitTestOnFill(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldStripShadowsAndInnerShadow(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	simplify(): void;
	/* typeEncoding=@16@0:8 */
	styleForBooleanOperation(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	supportsInnerOuterBorders(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	usedStyle(...args: any[]): any;
}

declare class MSStylePart extends _MSStylePart /* implements NSCopying, MSStylePart */ {
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isEnabled(): boolean;

	/* typeEncoding=@24@0:8@16 */
	static defaultStylePartForStyle(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	static stylesHaveEqualAppearance(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	configureFillForPreview(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	hasEqualAppearance(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	multiplyBy(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentLayer(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	parentStyle(...args: any[]): any;
	/* typeEncoding=@40@0:8{CGSize=dd}16@32 */
	previewImageForSize_colorSpace(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	setValue_forUndefinedKey(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	valueForUndefinedKey(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	wantsColorModePicker(...args: any[]): any;
}

declare class MSStyledLayer extends _MSStyledLayer /* implements MSStyledLayer */ {
	/* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	CGTransformForFrame(): CGAffineTransform;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	bounds(): CGRect;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	debugDescription(): NSString;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
	description(): NSString;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	hasTransforms(): boolean;
	/* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
	hash(): number;
	/* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isFlippedVertical(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isLayerExportable(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isSharedStyleOutOfSync(): boolean;
	/* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
	isVisible(): boolean;
	/* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
	objectID(): NSString;
	/* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	origin(): CGPoint;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rect(): CGRect;
	/* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
	rotation(): number;
	/* typeEncoding=@"MSSharedStyle", ivar=(null), attributes=(assign,nonatomic,weak) */
	sharedStyle(): MSSharedStyle;
	/* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
	superclass(): any;

	/* typeEncoding=@24@0:8@16 */
	static layerWithImage(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static layerWithImageFromFileURL(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	static layerWithImageFromPasteboard(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	static pasteExportOptions_onLayers(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24@32 */
	static pasteStyleDict_onLayers_document(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24@32 */
	static pasteStyleFromPasteboard_onLayers_document(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	static pasteStyleFromPasteboardOnLayers_document(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24@32 */
	static pasteTextStyle_onLayers_document(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	static supportedPasteboardTypesForStyleCopying(...args: any[]): any;

	/* typeEncoding=@16@0:8 */
	CSSAttributes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	adjustAfterInsert(): void;
	/* typeEncoding=v32@0:8@16@24 */
	applyOverride_document(...args: any[]): any;
	/* typeEncoding=v40@0:8@16@24@32 */
	applyOverrides_document_visitedSymbols(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	applyScreenPickerColor_preferredStyleName(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canConvertToOutlines(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	canCutSegments(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	changeColor(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	copiedStyleAttributesForLayer(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	copyStyleToPasteboard(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	copyStyleToPasteboard(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	correctInvalidGamma(): void;
	/* typeEncoding=@24@0:8@16 */
	createSharedStyleWithName(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignSharedStyles(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasEnabledBackgroundBlur(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasMarkers(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isSharedStyleOutOfSync(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	layerByRemovingSegmentAtIndexPath(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	layerStyleDidChange(): void;
	/* typeEncoding=@16@0:8 */
	layersByConvertingToOutlines(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	localSharedStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	multiplyBy(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	outlineShapeFromPath_withBorder(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	prepareAsMask(): void;
	/* typeEncoding=c16@0:8 */
	previewShouldIndicateSharedStyle(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	resetSharedStyle(): void;
	/* typeEncoding=v24@0:8@16 */
	setSharedStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setStyle(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	setupWithLayerBuilderDictionary(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	shareableObjectType(...args: any[]): any;
	/* typeEncoding=^{MSModelObject=#@@c}16@0:8 */
	sharedMaster(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sharedObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sharedStyle(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	sharedStylesReferencedInDocument(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	styleContainer(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	stylesForColorAdjustingWithPreferredName(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	updateSharedStyleReferencesFrom_to(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	updateSharedStyleToMatchSelf(): void;
	/* typeEncoding=@16@0:8 */
	usedStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	writeStyleToPasteboard(...args: any[]): any;
}

declare class _MSArtboardGroup extends MSLayerGroup {
	/* typeEncoding=@"MSColor", ivar=_backgroundColor, attributes=(retain,nonatomic) */
	backgroundColor(): MSColor;
	/* typeEncoding=@"MSSimpleGrid", ivar=_grid, attributes=(retain,nonatomic) */
	grid(): MSSimpleGrid;
	/* typeEncoding=c, ivar=_hasBackgroundColor, attributes=(assign,nonatomic) */
	hasBackgroundColor(): boolean;
	/* typeEncoding=@"MSRulerData", ivar=_horizontalRulerData, attributes=(retain,nonatomic) */
	horizontalRulerData(): MSRulerData;
	/* typeEncoding=c, ivar=_includeBackgroundColorInExport, attributes=(assign,nonatomic) */
	includeBackgroundColorInExport(): boolean;
	/* typeEncoding=c, ivar=_includeInCloudUpload, attributes=(assign,nonatomic) */
	includeInCloudUpload(): boolean;
	/* typeEncoding=c, ivar=_isFlowHome, attributes=(assign,nonatomic) */
	isFlowHome(): boolean;
	/* typeEncoding=@"MSLayoutGrid", ivar=_layout, attributes=(retain,nonatomic) */
	layout(): MSLayoutGrid;
	/* typeEncoding=@"NSDictionary", ivar=_presetDictionary, attributes=(retain,nonatomic) */
	presetDictionary(): NSDictionary;
	/* typeEncoding=c, ivar=_resizesContent, attributes=(assign,nonatomic) */
	resizesContent(): boolean;
	/* typeEncoding=@"MSRulerData", ivar=_verticalRulerData, attributes=(retain,nonatomic) */
	verticalRulerData(): MSRulerData;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	backgroundColor(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	grid(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasBackgroundColor(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	horizontalRulerData(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeBackgroundColorInExport(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isFlowHome(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layout(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	presetDictionary(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	resizesContent(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setBackgroundColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGrid(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasBackgroundColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setHorizontalRulerData(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIncludeBackgroundColorInExport(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIncludeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFlowHome(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayout(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPresetDictionary(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setResizesContent(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setVerticalRulerData(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	verticalRulerData(...args: any[]): any;
}

declare class _MSAssetCollection extends MSModelObject {
	/* typeEncoding=@"NSArray", ivar=_colorAssets, attributes=(retain,nonatomic) */
	colorAssets(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_exportPresets, attributes=(retain,nonatomic) */
	exportPresets(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_gradientAssets, attributes=(retain,nonatomic) */
	gradientAssets(): NSArray;
	/* typeEncoding=@"MSImageCollection", ivar=_imageCollection, attributes=(retain,nonatomic) */
	imageCollection(): MSImageCollection;
	/* typeEncoding=@"NSArray", ivar=_images, attributes=(retain,nonatomic) */
	images(): NSArray;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addColorAsset(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addColorAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addExportPreset(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addExportPresets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addGradientAsset(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addGradientAssets(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	colorAssets(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportPresets(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	gradientAssets(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	imageCollection(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	images(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertColorAsset_afterColorAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertColorAsset_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertColorAsset_beforeColorAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertColorAssets_afterColorAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertColorAssets_beforeColorAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportPreset_afterExportPreset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertExportPreset_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportPreset_beforeExportPreset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportPresets_afterExportPreset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportPresets_beforeExportPreset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientAsset_afterGradientAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertGradientAsset_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientAsset_beforeGradientAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientAssets_afterGradientAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientAssets_beforeGradientAsset(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveColorAssetIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveExportPresetIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveGradientAssetIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllColorAssets(): void;
	/* typeEncoding=v16@0:8 */
	removeAllExportPresets(): void;
	/* typeEncoding=v16@0:8 */
	removeAllGradientAssets(): void;
	/* typeEncoding=v24@0:8@16 */
	removeColorAsset(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeColorAssetAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeColorAssetsAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeExportPreset(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeExportPresetAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeExportPresetsAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeGradientAsset(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeGradientAssetAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeGradientAssetsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setColorAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setExportPresets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGradientAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImageCollection(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImages(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSAssetContainer extends MSModelObject {
	/* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
	name(): NSString;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSBaseGrid extends MSModelObject {
	/* typeEncoding=c, ivar=_isEnabled, attributes=(assign,nonatomic) */
	isEnabled(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isEnabled(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v20@0:8c16 */
	setIsEnabled(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSBitmapLayer extends MSStyledLayer {
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_clippingMask, attributes=(assign,nonatomic) */
	clippingMask(): CGRect;
	/* typeEncoding=c, ivar=_fillReplacesImage, attributes=(assign,nonatomic) */
	fillReplacesImage(): boolean;
	/* typeEncoding=@"MSImageData", ivar=_image, attributes=(retain,nonatomic) */
	image(): MSImageData;
	/* typeEncoding=q, ivar=_intendedDPI, attributes=(assign,nonatomic) */
	intendedDPI(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	clippingMask(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	fillReplacesImage(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	image(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=q16@0:8 */
	intendedDPI(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setClippingMask(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setFillReplacesImage(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImage(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setIntendedDPI(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSColor extends MSModelObject {
	/* typeEncoding=d, ivar=_alpha, attributes=(assign,nonatomic,readonly) */
	alpha(): number;
	/* typeEncoding=d, ivar=_blue, attributes=(assign,nonatomic,readonly) */
	blue(): number;
	/* typeEncoding=d, ivar=_green, attributes=(assign,nonatomic,readonly) */
	green(): number;
	/* typeEncoding=d, ivar=_red, attributes=(assign,nonatomic,readonly) */
	red(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=d16@0:8 */
	alpha(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	blue(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	green(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	red(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setAlpha(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setBlue(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setGreen(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRed(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSCurvePoint extends MSModelObject {
	/* typeEncoding=d, ivar=_cornerRadius, attributes=(assign,nonatomic) */
	cornerRadius(): number;
	/* typeEncoding={CGPoint=dd}, ivar=_curveFrom, attributes=(assign,nonatomic) */
	curveFrom(): CGPoint;
	/* typeEncoding=q, ivar=_curveMode, attributes=(assign,nonatomic) */
	curveMode(): number;
	/* typeEncoding={CGPoint=dd}, ivar=_curveTo, attributes=(assign,nonatomic) */
	curveTo(): CGPoint;
	/* typeEncoding=c, ivar=_hasCurveFrom, attributes=(assign,nonatomic) */
	hasCurveFrom(): boolean;
	/* typeEncoding=c, ivar=_hasCurveTo, attributes=(assign,nonatomic) */
	hasCurveTo(): boolean;
	/* typeEncoding={CGPoint=dd}, ivar=_point, attributes=(assign,nonatomic) */
	point(): CGPoint;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	cornerRadius(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	curveFrom(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	curveMode(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	curveTo(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasCurveFrom(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasCurveTo(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	point(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setCornerRadius(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCurveFrom(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setCurveMode(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCurveTo(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasCurveFrom(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasCurveTo(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setPoint(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSDocumentData extends MSModelObject {
	/* typeEncoding=@"MSAssetCollection", ivar=_assets, attributes=(retain,nonatomic) */
	assets(): MSAssetCollection;
	/* typeEncoding=Q, ivar=_colorSpace, attributes=(assign,nonatomic) */
	colorSpace(): number;
	/* typeEncoding=Q, ivar=_currentPageIndex, attributes=(assign,nonatomic) */
	currentPageIndex(): number;
	/* typeEncoding=@"NSArray", ivar=_foreignLayerStyles, attributes=(retain,nonatomic) */
	foreignLayerStyles(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_foreignSymbols, attributes=(retain,nonatomic) */
	foreignSymbols(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_foreignTextStyles, attributes=(retain,nonatomic) */
	foreignTextStyles(): NSArray;
	/* typeEncoding=@"MSSharedStyleContainer", ivar=_layerStyles, attributes=(retain,nonatomic) */
	layerStyles(): MSSharedStyleContainer;
	/* typeEncoding=@"MSSymbolContainer", ivar=_layerSymbols, attributes=(retain,nonatomic) */
	layerSymbols(): MSSymbolContainer;
	/* typeEncoding=@"MSSharedTextStyleContainer", ivar=_layerTextStyles, attributes=(retain,nonatomic) */
	layerTextStyles(): MSSharedTextStyleContainer;
	/* typeEncoding=@"NSArray", ivar=_pages, attributes=(retain,nonatomic) */
	pages(): NSArray;
	/* typeEncoding=@"NSDictionary", ivar=_userInfo, attributes=(copy,nonatomic) */
	userInfo(): NSDictionary;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addForeignLayerStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addForeignLayerStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addForeignSymbol(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addForeignSymbols(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addForeignTextStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addForeignTextStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addPage(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addPages(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	assets(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	colorSpace(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	currentPageIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignLayerStyles(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignSymbols(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignTextStyles(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignLayerStyle_afterForeignLayerStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertForeignLayerStyle_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignLayerStyle_beforeForeignLayerStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignLayerStyles_afterForeignLayerStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignLayerStyles_beforeForeignLayerStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignSymbol_afterForeignSymbol(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertForeignSymbol_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignSymbol_beforeForeignSymbol(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignSymbols_afterForeignSymbol(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignSymbols_beforeForeignSymbol(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignTextStyle_afterForeignTextStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertForeignTextStyle_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignTextStyle_beforeForeignTextStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignTextStyles_afterForeignTextStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertForeignTextStyles_beforeForeignTextStyle(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertPage_afterPage(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertPage_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertPage_beforePage(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertPages_afterPage(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertPages_beforePage(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layerStyles(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layerSymbols(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layerTextStyles(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveForeignLayerStyleIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveForeignSymbolIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveForeignTextStyleIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	movePageIndex_toIndex(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pages(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllForeignLayerStyles(): void;
	/* typeEncoding=v16@0:8 */
	removeAllForeignSymbols(): void;
	/* typeEncoding=v16@0:8 */
	removeAllForeignTextStyles(): void;
	/* typeEncoding=v16@0:8 */
	removeAllPages(): void;
	/* typeEncoding=v24@0:8@16 */
	removeForeignLayerStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeForeignLayerStyleAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeForeignLayerStylesAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeForeignSymbol(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeForeignSymbolAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeForeignSymbolsAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeForeignTextStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeForeignTextStyleAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeForeignTextStylesAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removePage(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removePageAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removePagesAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setColorSpace(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setCurrentPageIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setForeignLayerStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setForeignSymbols(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setForeignTextStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayerStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayerSymbols(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayerTextStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPages(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setUserInfo(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	userInfo(...args: any[]): any;
}

declare class _MSExportFormat extends MSModelObject {
	/* typeEncoding=d, ivar=_absoluteSize, attributes=(assign,nonatomic) */
	absoluteSize(): number;
	/* typeEncoding=@"NSString", ivar=_fileFormat, attributes=(retain,nonatomic) */
	fileFormat(): NSString;
	/* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
	name(): NSString;
	/* typeEncoding=q, ivar=_namingScheme, attributes=(assign,nonatomic) */
	namingScheme(): number;
	/* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
	scale(): number;
	/* typeEncoding=q, ivar=_visibleScaleType, attributes=(assign,nonatomic) */
	visibleScaleType(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=d16@0:8 */
	absoluteSize(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	fileFormat(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	namingScheme(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	scale(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setAbsoluteSize(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setFileFormat(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setNamingScheme(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setScale(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setVisibleScaleType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	visibleScaleType(...args: any[]): any;
}

declare class _MSExportOptions extends MSModelObject {
	/* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
	exportFormats(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_includedLayerIds, attributes=(retain,nonatomic) */
	includedLayerIds(): NSArray;
	/* typeEncoding=Q, ivar=_layerOptions, attributes=(assign,nonatomic) */
	layerOptions(): number;
	/* typeEncoding=c, ivar=_shouldTrim, attributes=(assign,nonatomic) */
	shouldTrim(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addExportFormat(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addExportFormats(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportFormats(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	includedLayerIds(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormat_afterExportFormat(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertExportFormat_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormat_beforeExportFormat(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormats_afterExportFormat(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormats_beforeExportFormat(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	layerOptions(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveExportFormatIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllExportFormats(): void;
	/* typeEncoding=v24@0:8@16 */
	removeExportFormat(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeExportFormatAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeExportFormatsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setExportFormats(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setIncludedLayerIds(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setLayerOptions(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setShouldTrim(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldTrim(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSExportPreset extends MSModelObject {
	/* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
	exportFormats(): NSArray;
	/* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
	name(): NSString;
	/* typeEncoding=c, ivar=_shouldApplyAutomatically, attributes=(assign,nonatomic) */
	shouldApplyAutomatically(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addExportFormat(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addExportFormats(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportFormats(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormat_afterExportFormat(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertExportFormat_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormat_beforeExportFormat(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormats_afterExportFormat(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertExportFormats_beforeExportFormat(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveExportFormatIndex_toIndex(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllExportFormats(): void;
	/* typeEncoding=v24@0:8@16 */
	removeExportFormat(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeExportFormatAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeExportFormatsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setExportFormats(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setShouldApplyAutomatically(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldApplyAutomatically(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSFlowConnection extends MSModelObject {
	/* typeEncoding=q, ivar=_animationType, attributes=(assign,nonatomic) */
	animationType(): number;
	/* typeEncoding=@"NSString", ivar=_destinationArtboardID, attributes=(retain,nonatomic) */
	destinationArtboardID(): NSString;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	animationType(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	destinationArtboardID(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setAnimationType(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setDestinationArtboardID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSForeignLayerStyle extends MSForeignStyle {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSForeignObject extends MSModelObject {
	/* typeEncoding=@"NSString", ivar=_libraryID, attributes=(retain,nonatomic) */
	libraryID(): NSString;
	/* typeEncoding=@"NSString", ivar=_sourceLibraryName, attributes=(retain,nonatomic) */
	sourceLibraryName(): NSString;
	/* typeEncoding=c, ivar=_symbolPrivate, attributes=(assign,nonatomic) */
	symbolPrivate(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	libraryID(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setLibraryID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSourceLibraryName(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setSymbolPrivate(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sourceLibraryName(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	symbolPrivate(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSForeignStyle extends MSForeignObject {
	/* typeEncoding=@"MSSharedStyle", ivar=_localSharedStyle, attributes=(retain,nonatomic) */
	localSharedStyle(): MSSharedStyle;
	/* typeEncoding=@"NSString", ivar=_remoteStyleID, attributes=(retain,nonatomic) */
	remoteStyleID(): NSString;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	localSharedStyle(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	remoteStyleID(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setLocalSharedStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setRemoteStyleID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSForeignSymbol extends MSForeignObject {
	/* typeEncoding=@"MSSymbolMaster", ivar=_originalMaster, attributes=(retain,nonatomic) */
	originalMaster(): MSSymbolMaster;
	/* typeEncoding=@"MSSymbolMaster", ivar=_symbolMaster, attributes=(retain,nonatomic) */
	symbolMaster(): MSSymbolMaster;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	originalMaster(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setOriginalMaster(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSymbolMaster(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolMaster(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSForeignTextStyle extends MSForeignStyle {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSGradient extends MSModelObject {
	/* typeEncoding=d, ivar=_elipseLength, attributes=(assign,nonatomic) */
	elipseLength(): number;
	/* typeEncoding={CGPoint=dd}, ivar=_from, attributes=(assign,nonatomic) */
	from(): CGPoint;
	/* typeEncoding=q, ivar=_gradientType, attributes=(assign,nonatomic) */
	gradientType(): number;
	/* typeEncoding=@"NSArray", ivar=_stops, attributes=(retain,nonatomic) */
	stops(): NSArray;
	/* typeEncoding={CGPoint=dd}, ivar=_to, attributes=(assign,nonatomic) */
	to(): CGPoint;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addGradientStop(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addGradientStops(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	elipseLength(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	from(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	gradientType(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientStop_afterGradientStop(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertGradientStop_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientStop_beforeGradientStop(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientStops_afterGradientStop(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertGradientStops_beforeGradientStop(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveGradientStopIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllGradientStops(): void;
	/* typeEncoding=v24@0:8@16 */
	removeGradientStop(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeGradientStopAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeGradientStopsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setElipseLength(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setFrom(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setGradientType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setStops(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setTo(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	stops(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	to(...args: any[]): any;
}

declare class _MSGradientStop extends MSModelObject {
	/* typeEncoding=@"MSColor", ivar=_color, attributes=(retain,nonatomic) */
	color(): MSColor;
	/* typeEncoding=d, ivar=_position, attributes=(assign,nonatomic) */
	position(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	color(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	position(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setColor(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setPosition(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSGraphicsContextSettings extends MSModelObject {
	/* typeEncoding=q, ivar=_blendMode, attributes=(assign,nonatomic) */
	blendMode(): number;
	/* typeEncoding=d, ivar=_opacity, attributes=(assign,nonatomic) */
	opacity(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=q16@0:8 */
	blendMode(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=d16@0:8 */
	opacity(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setBlendMode(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setOpacity(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSHotspotLayer extends MSLayer {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSImageCollection extends MSModelObject {
	/* typeEncoding=@"NSDictionary", ivar=_images, attributes=(retain,nonatomic) */
	images(): NSDictionary;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	images(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setImages(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSImmutableArtboardGroup extends MSImmutableLayerGroup {
	/* typeEncoding=@"MSImmutableColor", ivar=_backgroundColor, attributes=(retain,nonatomic) */
	backgroundColor(): MSImmutableColor;
	/* typeEncoding=@"MSImmutableSimpleGrid", ivar=_grid, attributes=(retain,nonatomic) */
	grid(): MSImmutableSimpleGrid;
	/* typeEncoding=c, ivar=_hasBackgroundColor, attributes=(assign,nonatomic) */
	hasBackgroundColor(): boolean;
	/* typeEncoding=@"MSImmutableRulerData", ivar=_horizontalRulerData, attributes=(retain,nonatomic) */
	horizontalRulerData(): MSImmutableRulerData;
	/* typeEncoding=c, ivar=_includeBackgroundColorInExport, attributes=(assign,nonatomic) */
	includeBackgroundColorInExport(): boolean;
	/* typeEncoding=c, ivar=_includeInCloudUpload, attributes=(assign,nonatomic) */
	includeInCloudUpload(): boolean;
	/* typeEncoding=c, ivar=_isFlowHome, attributes=(assign,nonatomic) */
	isFlowHome(): boolean;
	/* typeEncoding=@"MSImmutableLayoutGrid", ivar=_layout, attributes=(retain,nonatomic) */
	layout(): MSImmutableLayoutGrid;
	/* typeEncoding=@"NSDictionary", ivar=_presetDictionary, attributes=(retain,nonatomic) */
	presetDictionary(): NSDictionary;
	/* typeEncoding=c, ivar=_resizesContent, attributes=(assign,nonatomic) */
	resizesContent(): boolean;
	/* typeEncoding=@"MSImmutableRulerData", ivar=_verticalRulerData, attributes=(retain,nonatomic) */
	verticalRulerData(): MSImmutableRulerData;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	backgroundColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	grid(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasBackgroundColor(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	horizontalRulerData(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeBackgroundColorInExport(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isFlowHome(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layout(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	presetDictionary(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	resizesContent(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setBackgroundColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGrid(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasBackgroundColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setHorizontalRulerData(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIncludeBackgroundColorInExport(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIncludeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFlowHome(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayout(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPresetDictionary(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setResizesContent(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setVerticalRulerData(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	verticalRulerData(...args: any[]): any;
}

declare class _MSImmutableAssetCollection extends MSImmutableModelObject {
	/* typeEncoding=@"NSArray", ivar=_colorAssets, attributes=(retain,nonatomic) */
	colorAssets(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_exportPresets, attributes=(retain,nonatomic) */
	exportPresets(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_gradientAssets, attributes=(retain,nonatomic) */
	gradientAssets(): NSArray;
	/* typeEncoding=@"MSImmutableImageCollection", ivar=_imageCollection, attributes=(retain,nonatomic) */
	imageCollection(): MSImmutableImageCollection;
	/* typeEncoding=@"NSArray", ivar=_images, attributes=(retain,nonatomic) */
	images(): NSArray;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	colorAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportPresets(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	gradientAssets(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	imageCollection(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	images(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setColorAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setExportPresets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGradientAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImageCollection(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImages(...args: any[]): any;
}

declare class _MSImmutableBaseGrid extends MSImmutableModelObject {
	/* typeEncoding=c, ivar=_isEnabled, attributes=(assign,nonatomic) */
	isEnabled(): boolean;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isEnabled(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsEnabled(...args: any[]): any;
}

declare class _MSImmutableBitmapLayer extends MSImmutableStyledLayer {
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_clippingMask, attributes=(assign,nonatomic) */
	clippingMask(): CGRect;
	/* typeEncoding=c, ivar=_fillReplacesImage, attributes=(assign,nonatomic) */
	fillReplacesImage(): boolean;
	/* typeEncoding=@"MSImageData", ivar=_image, attributes=(retain,nonatomic) */
	image(): MSImageData;
	/* typeEncoding=q, ivar=_intendedDPI, attributes=(assign,nonatomic) */
	intendedDPI(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	clippingMask(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	fillReplacesImage(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	image(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=q16@0:8 */
	intendedDPI(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setClippingMask(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setFillReplacesImage(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImage(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setIntendedDPI(...args: any[]): any;
}

declare class _MSImmutableColor extends MSImmutableModelObject {
	/* typeEncoding=d, ivar=_alpha, attributes=(assign,nonatomic) */
	alpha(): number;
	/* typeEncoding=d, ivar=_blue, attributes=(assign,nonatomic) */
	blue(): number;
	/* typeEncoding=d, ivar=_green, attributes=(assign,nonatomic) */
	green(): number;
	/* typeEncoding=d, ivar=_red, attributes=(assign,nonatomic) */
	red(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=d16@0:8 */
	alpha(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	blue(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	green(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	red(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setAlpha(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setBlue(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setGreen(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRed(...args: any[]): any;
}

declare class _MSImmutableCurvePoint extends MSImmutableModelObject {
	/* typeEncoding=d, ivar=_cornerRadius, attributes=(assign,nonatomic) */
	cornerRadius(): number;
	/* typeEncoding={CGPoint=dd}, ivar=_curveFrom, attributes=(assign,nonatomic) */
	curveFrom(): CGPoint;
	/* typeEncoding=q, ivar=_curveMode, attributes=(assign,nonatomic) */
	curveMode(): number;
	/* typeEncoding={CGPoint=dd}, ivar=_curveTo, attributes=(assign,nonatomic) */
	curveTo(): CGPoint;
	/* typeEncoding=c, ivar=_hasCurveFrom, attributes=(assign,nonatomic) */
	hasCurveFrom(): boolean;
	/* typeEncoding=c, ivar=_hasCurveTo, attributes=(assign,nonatomic) */
	hasCurveTo(): boolean;
	/* typeEncoding={CGPoint=dd}, ivar=_point, attributes=(assign,nonatomic) */
	point(): CGPoint;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=d16@0:8 */
	cornerRadius(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	curveFrom(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	curveMode(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	curveTo(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasCurveFrom(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasCurveTo(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	point(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setCornerRadius(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCurveFrom(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setCurveMode(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCurveTo(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasCurveFrom(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasCurveTo(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setPoint(...args: any[]): any;
}

declare class _MSImmutableDocumentData extends MSImmutableModelObject {
	/* typeEncoding=@"MSImmutableAssetCollection", ivar=_assets, attributes=(retain,nonatomic) */
	assets(): MSImmutableAssetCollection;
	/* typeEncoding=Q, ivar=_colorSpace, attributes=(assign,nonatomic) */
	colorSpace(): number;
	/* typeEncoding=Q, ivar=_currentPageIndex, attributes=(assign,nonatomic) */
	currentPageIndex(): number;
	/* typeEncoding=@"NSArray", ivar=_foreignLayerStyles, attributes=(retain,nonatomic) */
	foreignLayerStyles(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_foreignSymbols, attributes=(retain,nonatomic) */
	foreignSymbols(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_foreignTextStyles, attributes=(retain,nonatomic) */
	foreignTextStyles(): NSArray;
	/* typeEncoding=@"MSImmutableSharedStyleContainer", ivar=_layerStyles, attributes=(retain,nonatomic) */
	layerStyles(): MSImmutableSharedStyleContainer;
	/* typeEncoding=@"MSImmutableSymbolContainer", ivar=_layerSymbols, attributes=(retain,nonatomic) */
	layerSymbols(): MSImmutableSymbolContainer;
	/* typeEncoding=@"MSImmutableSharedTextStyleContainer", ivar=_layerTextStyles, attributes=(retain,nonatomic) */
	layerTextStyles(): MSImmutableSharedTextStyleContainer;
	/* typeEncoding=@"NSArray", ivar=_pages, attributes=(retain,nonatomic) */
	pages(): NSArray;
	/* typeEncoding=@"NSDictionary", ivar=_userInfo, attributes=(copy,nonatomic) */
	userInfo(): NSDictionary;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	assets(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	colorSpace(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	currentPageIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignLayerStyles(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignSymbols(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	foreignTextStyles(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layerStyles(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layerSymbols(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layerTextStyles(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	pages(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setAssets(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setColorSpace(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setCurrentPageIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setForeignLayerStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setForeignSymbols(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setForeignTextStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayerStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayerSymbols(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayerTextStyles(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPages(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setUserInfo(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	userInfo(...args: any[]): any;
}

declare class _MSImmutableExportFormat extends MSImmutableModelObject {
	/* typeEncoding=d, ivar=_absoluteSize, attributes=(assign,nonatomic) */
	absoluteSize(): number;
	/* typeEncoding=@"NSString", ivar=_fileFormat, attributes=(retain,nonatomic) */
	fileFormat(): NSString;
	/* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
	name(): NSString;
	/* typeEncoding=q, ivar=_namingScheme, attributes=(assign,nonatomic) */
	namingScheme(): number;
	/* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
	scale(): number;
	/* typeEncoding=q, ivar=_visibleScaleType, attributes=(assign,nonatomic) */
	visibleScaleType(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=d16@0:8 */
	absoluteSize(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	fileFormat(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	namingScheme(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	scale(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setAbsoluteSize(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFileFormat(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setNamingScheme(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setScale(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setVisibleScaleType(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	visibleScaleType(...args: any[]): any;
}

declare class _MSImmutableExportOptions extends MSImmutableModelObject {
	/* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
	exportFormats(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_includedLayerIds, attributes=(retain,nonatomic) */
	includedLayerIds(): NSArray;
	/* typeEncoding=Q, ivar=_layerOptions, attributes=(assign,nonatomic) */
	layerOptions(): number;
	/* typeEncoding=c, ivar=_shouldTrim, attributes=(assign,nonatomic) */
	shouldTrim(): boolean;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportFormats(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	includedLayerIds(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	layerOptions(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setExportFormats(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setIncludedLayerIds(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setLayerOptions(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setShouldTrim(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldTrim(...args: any[]): any;
}

declare class _MSImmutableExportPreset extends MSImmutableModelObject {
	/* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
	exportFormats(): NSArray;
	/* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
	name(): NSString;
	/* typeEncoding=c, ivar=_shouldApplyAutomatically, attributes=(assign,nonatomic) */
	shouldApplyAutomatically(): boolean;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportFormats(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setExportFormats(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setShouldApplyAutomatically(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldApplyAutomatically(...args: any[]): any;
}

declare class _MSImmutableFlowConnection extends MSImmutableModelObject {
	/* typeEncoding=q, ivar=_animationType, attributes=(assign,nonatomic) */
	animationType(): number;
	/* typeEncoding=@"NSString", ivar=_destinationArtboardID, attributes=(retain,nonatomic) */
	destinationArtboardID(): NSString;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	animationType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	destinationArtboardID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setAnimationType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setDestinationArtboardID(...args: any[]): any;
}

declare class _MSImmutableForeignLayerStyle extends MSImmutableForeignStyle {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableForeignObject extends MSImmutableModelObject {
	/* typeEncoding=@"NSString", ivar=_libraryID, attributes=(retain,nonatomic) */
	libraryID(): NSString;
	/* typeEncoding=@"NSString", ivar=_sourceLibraryName, attributes=(retain,nonatomic) */
	sourceLibraryName(): NSString;
	/* typeEncoding=c, ivar=_symbolPrivate, attributes=(assign,nonatomic) */
	symbolPrivate(): boolean;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	libraryID(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLibraryID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSourceLibraryName(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setSymbolPrivate(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sourceLibraryName(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	symbolPrivate(...args: any[]): any;
}

declare class _MSImmutableForeignStyle extends MSImmutableForeignObject {
	/* typeEncoding=@"MSImmutableSharedStyle", ivar=_localSharedStyle, attributes=(retain,nonatomic) */
	localSharedStyle(): MSImmutableSharedStyle;
	/* typeEncoding=@"NSString", ivar=_remoteStyleID, attributes=(retain,nonatomic) */
	remoteStyleID(): NSString;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	localSharedStyle(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	remoteStyleID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLocalSharedStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setRemoteStyleID(...args: any[]): any;
}

declare class _MSImmutableForeignSymbol extends MSImmutableForeignObject {
	/* typeEncoding=@"MSImmutableSymbolMaster", ivar=_originalMaster, attributes=(retain,nonatomic) */
	originalMaster(): MSImmutableSymbolMaster;
	/* typeEncoding=@"MSImmutableSymbolMaster", ivar=_symbolMaster, attributes=(retain,nonatomic) */
	symbolMaster(): MSImmutableSymbolMaster;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	originalMaster(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setOriginalMaster(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSymbolMaster(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolMaster(...args: any[]): any;
}

declare class _MSImmutableForeignTextStyle extends MSImmutableForeignStyle {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableGradient extends MSImmutableModelObject {
	/* typeEncoding=d, ivar=_elipseLength, attributes=(assign,nonatomic) */
	elipseLength(): number;
	/* typeEncoding={CGPoint=dd}, ivar=_from, attributes=(assign,nonatomic) */
	from(): CGPoint;
	/* typeEncoding=q, ivar=_gradientType, attributes=(assign,nonatomic) */
	gradientType(): number;
	/* typeEncoding=@"NSArray", ivar=_stops, attributes=(retain,nonatomic) */
	stops(): NSArray;
	/* typeEncoding={CGPoint=dd}, ivar=_to, attributes=(assign,nonatomic) */
	to(): CGPoint;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	elipseLength(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	from(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	gradientType(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setElipseLength(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setFrom(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setGradientType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setStops(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setTo(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	stops(...args: any[]): any;
	/* typeEncoding={CGPoint=dd}16@0:8 */
	to(...args: any[]): any;
}

declare class _MSImmutableGradientStop extends MSImmutableModelObject {
	/* typeEncoding=@"MSImmutableColor", ivar=_color, attributes=(retain,nonatomic) */
	color(): MSImmutableColor;
	/* typeEncoding=d, ivar=_position, attributes=(assign,nonatomic) */
	position(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	color(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	position(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setColor(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setPosition(...args: any[]): any;
}

declare class _MSImmutableGraphicsContextSettings extends MSImmutableModelObject {
	/* typeEncoding=q, ivar=_blendMode, attributes=(assign,nonatomic) */
	blendMode(): number;
	/* typeEncoding=d, ivar=_opacity, attributes=(assign,nonatomic) */
	opacity(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=q16@0:8 */
	blendMode(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	opacity(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setBlendMode(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setOpacity(...args: any[]): any;
}

declare class _MSImmutableHotspotLayer extends MSImmutableLayer {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableImageCollection extends MSImmutableModelObject {
	/* typeEncoding=@"NSDictionary", ivar=_images, attributes=(retain,nonatomic) */
	images(): NSDictionary;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	images(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImages(...args: any[]): any;
}

declare class _MSImmutableLayer extends MSImmutableModelObject {
	/* typeEncoding=q, ivar=_booleanOperation, attributes=(assign,nonatomic) */
	booleanOperation(): number;
	/* typeEncoding=@"MSImmutableExportOptions", ivar=_exportOptions, attributes=(retain,nonatomic) */
	exportOptions(): MSImmutableExportOptions;
	/* typeEncoding=@"MSImmutableFlowConnection", ivar=_flow, attributes=(retain,nonatomic) */
	flow(): MSImmutableFlowConnection;
	/* typeEncoding=@"MSImmutableRect", ivar=_frame, attributes=(retain,nonatomic) */
	frame(): MSImmutableRect;
	/* typeEncoding=c, ivar=_isFixedToViewport, attributes=(assign,nonatomic) */
	isFixedToViewport(): boolean;
	/* typeEncoding=c, ivar=_isFlippedHorizontal, attributes=(assign,nonatomic) */
	isFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=_isFlippedVertical, attributes=(assign,nonatomic) */
	isFlippedVertical(): boolean;
	/* typeEncoding=c, ivar=_isLocked, attributes=(assign,nonatomic) */
	isLocked(): boolean;
	/* typeEncoding=c, ivar=_isVisible, attributes=(assign,nonatomic) */
	isVisible(): boolean;
	/* typeEncoding=q, ivar=_layerListExpandedType, attributes=(assign,nonatomic) */
	layerListExpandedType(): number;
	/* typeEncoding=c, ivar=_maintainScrollPosition, attributes=(assign,nonatomic) */
	maintainScrollPosition(): boolean;
	/* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
	name(): NSString;
	/* typeEncoding=c, ivar=_nameIsFixed, attributes=(assign,nonatomic) */
	nameIsFixed(): boolean;
	/* typeEncoding=@"NSString", ivar=_originalObjectID, attributes=(retain,nonatomic) */
	originalObjectID(): NSString;
	/* typeEncoding=Q, ivar=_resizingConstraint, attributes=(assign,nonatomic) */
	resizingConstraint(): number;
	/* typeEncoding=Q, ivar=_resizingType, attributes=(assign,nonatomic) */
	resizingType(): number;
	/* typeEncoding=d, ivar=_rotation, attributes=(assign,nonatomic) */
	rotation(): number;
	/* typeEncoding=c, ivar=_shouldBreakMaskChain, attributes=(assign,nonatomic) */
	shouldBreakMaskChain(): boolean;
	/* typeEncoding=@"NSDictionary", ivar=_userInfo, attributes=(copy,nonatomic) */
	userInfo(): NSDictionary;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	booleanOperation(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportOptions(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	flow(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	frame(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	initWithMinimalSetup(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isFixedToViewport(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isFlippedHorizontal(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isFlippedVertical(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isLocked(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isVisible(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	layerListExpandedType(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	maintainScrollPosition(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	nameIsFixed(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	originalObjectID(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	resizingConstraint(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	resizingType(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	rotation(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setBooleanOperation(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setExportOptions(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFlow(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFrame(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFixedToViewport(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFlippedHorizontal(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFlippedVertical(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsLocked(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsVisible(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setLayerListExpandedType(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setMaintainScrollPosition(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setNameIsFixed(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setOriginalObjectID(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setResizingConstraint(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setResizingType(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRotation(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setShouldBreakMaskChain(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setUserInfo(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldBreakMaskChain(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	userInfo(...args: any[]): any;
}

declare class _MSImmutableLayerGroup extends MSImmutableStyledLayer {
	/* typeEncoding=@"MSImmutableGroupLayout", ivar=_groupLayout, attributes=(retain,nonatomic) */
	groupLayout(): MSImmutableGroupLayout;
	/* typeEncoding=c, ivar=_hasClickThrough, attributes=(assign,nonatomic) */
	hasClickThrough(): boolean;
	/* typeEncoding=@"NSArray", ivar=_layers, attributes=(retain,nonatomic) */
	layers(): NSArray;
	/* typeEncoding=@"NSString", ivar=_sharedObjectID, attributes=(retain,nonatomic) */
	sharedObjectID(): NSString;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	groupLayout(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasClickThrough(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layers(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGroupLayout(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasClickThrough(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayers(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSharedObjectID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sharedObjectID(...args: any[]): any;
}

declare class _MSImmutableLayoutGrid extends MSImmutableBaseGrid {
	/* typeEncoding=d, ivar=_columnWidth, attributes=(assign,nonatomic) */
	columnWidth(): number;
	/* typeEncoding=c, ivar=_drawHorizontal, attributes=(assign,nonatomic) */
	drawHorizontal(): boolean;
	/* typeEncoding=c, ivar=_drawHorizontalLines, attributes=(assign,nonatomic) */
	drawHorizontalLines(): boolean;
	/* typeEncoding=c, ivar=_drawVertical, attributes=(assign,nonatomic) */
	drawVertical(): boolean;
	/* typeEncoding=d, ivar=_gutterHeight, attributes=(assign,nonatomic) */
	gutterHeight(): number;
	/* typeEncoding=d, ivar=_gutterWidth, attributes=(assign,nonatomic) */
	gutterWidth(): number;
	/* typeEncoding=c, ivar=_guttersOutside, attributes=(assign,nonatomic) */
	guttersOutside(): boolean;
	/* typeEncoding=d, ivar=_horizontalOffset, attributes=(assign,nonatomic) */
	horizontalOffset(): number;
	/* typeEncoding=d, ivar=_numberOfColumns, attributes=(assign,nonatomic) */
	numberOfColumns(): number;
	/* typeEncoding=d, ivar=_rowHeightMultiplication, attributes=(assign,nonatomic) */
	rowHeightMultiplication(): number;
	/* typeEncoding=d, ivar=_totalWidth, attributes=(assign,nonatomic) */
	totalWidth(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=d16@0:8 */
	columnWidth(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	drawHorizontal(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	drawHorizontalLines(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	drawVertical(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	gutterHeight(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	gutterWidth(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	guttersOutside(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	horizontalOffset(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	numberOfColumns(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	rowHeightMultiplication(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setColumnWidth(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDrawHorizontal(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDrawHorizontalLines(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDrawVertical(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setGutterHeight(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setGutterWidth(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setGuttersOutside(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHorizontalOffset(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setNumberOfColumns(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRowHeightMultiplication(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setTotalWidth(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	totalWidth(...args: any[]): any;
}

declare class _MSImmutableOvalShape extends MSImmutableShapePathLayer {
	/* typeEncoding=c16@0:8 */
	static isEditedByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutablePage extends MSImmutableLayerGroup {
	/* typeEncoding=@"MSImmutableSimpleGrid", ivar=_grid, attributes=(retain,nonatomic) */
	grid(): MSImmutableSimpleGrid;
	/* typeEncoding=@"MSImmutableRulerData", ivar=_horizontalRulerData, attributes=(retain,nonatomic) */
	horizontalRulerData(): MSImmutableRulerData;
	/* typeEncoding=c, ivar=_includeInCloudUpload, attributes=(assign,nonatomic) */
	includeInCloudUpload(): boolean;
	/* typeEncoding=@"MSImmutableLayoutGrid", ivar=_layout, attributes=(retain,nonatomic) */
	layout(): MSImmutableLayoutGrid;
	/* typeEncoding=@"MSImmutableRulerData", ivar=_verticalRulerData, attributes=(retain,nonatomic) */
	verticalRulerData(): MSImmutableRulerData;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	grid(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	horizontalRulerData(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layout(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGrid(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setHorizontalRulerData(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIncludeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayout(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setVerticalRulerData(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	verticalRulerData(...args: any[]): any;
}

declare class _MSImmutablePolygonShape extends MSImmutableShapePathLayer {
	/* typeEncoding=q, ivar=_numberOfPoints, attributes=(assign,nonatomic) */
	numberOfPoints(): number;

	/* typeEncoding=c16@0:8 */
	static isEditedByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	numberOfPoints(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setNumberOfPoints(...args: any[]): any;
}

declare class _MSImmutableRect extends MSImmutableModelObject {
	/* typeEncoding=c, ivar=_constrainProportions, attributes=(assign,nonatomic) */
	constrainProportions(): boolean;
	/* typeEncoding=d, ivar=_height, attributes=(assign,nonatomic) */
	height(): number;
	/* typeEncoding=d, ivar=_width, attributes=(assign,nonatomic) */
	width(): number;
	/* typeEncoding=d, ivar=_x, attributes=(assign,nonatomic) */
	x(): number;
	/* typeEncoding=d, ivar=_y, attributes=(assign,nonatomic) */
	y(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=c16@0:8 */
	constrainProportions(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	height(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setConstrainProportions(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHeight(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setWidth(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setY(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	width(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	x(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	y(...args: any[]): any;
}

declare class _MSImmutableRectangleShape extends MSImmutableShapePathLayer {
	/* typeEncoding=d, ivar=_fixedRadius, attributes=(assign,nonatomic) */
	fixedRadius(): number;
	/* typeEncoding=c, ivar=_needsConvertionToNewRoundCorners, attributes=(assign,nonatomic) */
	needsConvertionToNewRoundCorners(): boolean;

	/* typeEncoding=c16@0:8 */
	static isEditedByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	fixedRadius(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	needsConvertionToNewRoundCorners(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setFixedRadius(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setNeedsConvertionToNewRoundCorners(...args: any[]): any;
}

declare class _MSImmutableRulerData extends MSImmutableModelObject {
	/* typeEncoding=q, ivar=_base, attributes=(assign,nonatomic) */
	base(): number;
	/* typeEncoding=@"NSArray", ivar=_guides, attributes=(copy,nonatomic) */
	guides(): NSArray;
	/* typeEncoding=d, ivar=_temporaryGuide, attributes=(assign,nonatomic) */
	temporaryGuide(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	base(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	guides(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setBase(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGuides(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setTemporaryGuide(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	temporaryGuide(...args: any[]): any;
}

declare class _MSImmutableShapeGroup extends MSImmutableLayerGroup {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableShapePath extends MSImmutableModelObject {
	/* typeEncoding=c, ivar=_isClosed, attributes=(assign,nonatomic) */
	isClosed(): boolean;
	/* typeEncoding=q, ivar=_pointRadiusBehaviour, attributes=(assign,nonatomic) */
	pointRadiusBehaviour(): number;
	/* typeEncoding=@"NSArray", ivar=_points, attributes=(retain,nonatomic) */
	points(): NSArray;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isClosed(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	pointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	points(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsClosed(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPoints(...args: any[]): any;
}

declare class _MSImmutableShapePathLayer extends MSImmutableStyledLayer {
	/* typeEncoding=c, ivar=_edited, attributes=(assign,nonatomic) */
	edited(): boolean;
	/* typeEncoding=c, ivar=_isClosed, attributes=(assign,nonatomic) */
	isClosed(): boolean;
	/* typeEncoding=q, ivar=_pointRadiusBehaviour, attributes=(assign,nonatomic) */
	pointRadiusBehaviour(): number;
	/* typeEncoding=@"NSArray", ivar=_points, attributes=(retain,nonatomic) */
	points(): NSArray;

	/* typeEncoding=c16@0:8 */
	static isEditedByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	edited(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isClosed(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	pointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	points(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setEdited(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsClosed(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPoints(...args: any[]): any;
}

declare class _MSImmutableSharedObject extends MSImmutableModelObject {
	/* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
	name(): NSString;
	/* typeEncoding=@"MSImmutableModelObject", ivar=_value, attributes=(retain,nonatomic) */
	value(): MSImmutableModelObject;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setValue(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	value(...args: any[]): any;
}

declare class _MSImmutableSharedObjectContainer extends MSImmutableModelObject {
	/* typeEncoding=@"NSArray", ivar=_objects, attributes=(retain,nonatomic) */
	objects(): NSArray;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	objects(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setObjects(...args: any[]): any;
}

declare class _MSImmutableSharedStyle extends MSImmutableSharedObject {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableSharedStyleContainer extends MSImmutableSharedObjectContainer {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableSharedTextStyleContainer extends MSImmutableSharedStyleContainer {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableSimpleGrid extends MSImmutableBaseGrid {
	/* typeEncoding=q, ivar=_gridSize, attributes=(assign,nonatomic) */
	gridSize(): number;
	/* typeEncoding=q, ivar=_thickGridTimes, attributes=(assign,nonatomic) */
	thickGridTimes(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	gridSize(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setGridSize(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setThickGridTimes(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	thickGridTimes(...args: any[]): any;
}

declare class _MSImmutableSliceLayer extends MSImmutableLayer {
	/* typeEncoding=@"MSImmutableColor", ivar=_backgroundColor, attributes=(retain,nonatomic) */
	backgroundColor(): MSImmutableColor;
	/* typeEncoding=c, ivar=_hasBackgroundColor, attributes=(assign,nonatomic) */
	hasBackgroundColor(): boolean;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	backgroundColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasBackgroundColor(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setBackgroundColor(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasBackgroundColor(...args: any[]): any;
}

declare class _MSImmutableStarShape extends MSImmutableShapePathLayer {
	/* typeEncoding=q, ivar=_numberOfPoints, attributes=(assign,nonatomic) */
	numberOfPoints(): number;
	/* typeEncoding=d, ivar=_radius, attributes=(assign,nonatomic) */
	radius(): number;

	/* typeEncoding=c16@0:8 */
	static isEditedByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	numberOfPoints(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	radius(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setNumberOfPoints(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRadius(...args: any[]): any;
}

declare class _MSImmutableStyle extends MSImmutableModelObject {
	/* typeEncoding=@"MSImmutableStyleBlur", ivar=_blur, attributes=(retain,nonatomic) */
	blur(): MSImmutableStyleBlur;
	/* typeEncoding=@"MSImmutableStyleBorderOptions", ivar=_borderOptions, attributes=(retain,nonatomic) */
	borderOptions(): MSImmutableStyleBorderOptions;
	/* typeEncoding=@"NSArray", ivar=_borders, attributes=(retain,nonatomic) */
	borders(): NSArray;
	/* typeEncoding=@"MSImmutableStyleColorControls", ivar=_colorControls, attributes=(retain,nonatomic) */
	colorControls(): MSImmutableStyleColorControls;
	/* typeEncoding=@"MSImmutableGraphicsContextSettings", ivar=_contextSettings, attributes=(retain,nonatomic) */
	contextSettings(): MSImmutableGraphicsContextSettings;
	/* typeEncoding=Q, ivar=_endMarkerType, attributes=(assign,nonatomic) */
	endMarkerType(): number;
	/* typeEncoding=@"NSArray", ivar=_fills, attributes=(retain,nonatomic) */
	fills(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_innerShadows, attributes=(retain,nonatomic) */
	innerShadows(): NSArray;
	/* typeEncoding=q, ivar=_miterLimit, attributes=(assign,nonatomic) */
	miterLimit(): number;
	/* typeEncoding=@"NSArray", ivar=_shadows, attributes=(retain,nonatomic) */
	shadows(): NSArray;
	/* typeEncoding=Q, ivar=_startMarkerType, attributes=(assign,nonatomic) */
	startMarkerType(): number;
	/* typeEncoding=@"MSImmutableTextStyle", ivar=_textStyle, attributes=(retain,nonatomic) */
	textStyle(): MSImmutableTextStyle;
	/* typeEncoding=Q, ivar=_windingRule, attributes=(assign,nonatomic) */
	windingRule(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	blur(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	borderOptions(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	borders(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	colorControls(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	contextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	endMarkerType(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	fills(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	innerShadows(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	miterLimit(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setBlur(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setBorderOptions(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setBorders(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setColorControls(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setContextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setEndMarkerType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFills(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setInnerShadows(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setMiterLimit(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setShadows(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setStartMarkerType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setTextStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setWindingRule(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	shadows(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	startMarkerType(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	textStyle(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	windingRule(...args: any[]): any;
}

declare class _MSImmutableStyleBasicFill extends MSImmutableStylePart {
	/* typeEncoding=@"MSImmutableColor", ivar=_color, attributes=(retain,nonatomic) */
	color(): MSImmutableColor;
	/* typeEncoding=@"MSImmutableGraphicsContextSettings", ivar=_contextSettings, attributes=(retain,nonatomic) */
	contextSettings(): MSImmutableGraphicsContextSettings;
	/* typeEncoding=Q, ivar=_fillType, attributes=(assign,nonatomic) */
	fillType(): number;
	/* typeEncoding=@"MSImmutableGradient", ivar=_gradient, attributes=(retain,nonatomic) */
	gradient(): MSImmutableGradient;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	color(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	contextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	fillType(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	gradient(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setContextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setFillType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGradient(...args: any[]): any;
}

declare class _MSImmutableStyleBlur extends MSImmutableStylePart {
	/* typeEncoding={CGPoint=dd}, ivar=_center, attributes=(assign,nonatomic) */
	center(): CGPoint;
	/* typeEncoding=d, ivar=_motionAngle, attributes=(assign,nonatomic) */
	motionAngle(): number;
	/* typeEncoding=d, ivar=_radius, attributes=(assign,nonatomic) */
	radius(): number;
	/* typeEncoding=d, ivar=_saturation, attributes=(assign,nonatomic) */
	saturation(): number;
	/* typeEncoding=Q, ivar=_type, attributes=(assign,nonatomic) */
	type(): number;

	/* typeEncoding=c16@0:8 */
	static isEnabledByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding={CGPoint=dd}16@0:8 */
	center(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	motionAngle(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	radius(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	saturation(...args: any[]): any;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCenter(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMotionAngle(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRadius(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setSaturation(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setType(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	type(...args: any[]): any;
}

declare class _MSImmutableStyleBorder extends MSImmutableStyleBasicFill {
	/* typeEncoding=q, ivar=_position, attributes=(assign,nonatomic) */
	position(): number;
	/* typeEncoding=d, ivar=_thickness, attributes=(assign,nonatomic) */
	thickness(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	position(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPosition(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setThickness(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	thickness(...args: any[]): any;
}

declare class _MSImmutableStyleBorderOptions extends MSImmutableStylePart {
	/* typeEncoding=@"NSArray", ivar=_dashPattern, attributes=(copy,nonatomic) */
	dashPattern(): NSArray;
	/* typeEncoding=Q, ivar=_lineCapStyle, attributes=(assign,nonatomic) */
	lineCapStyle(): number;
	/* typeEncoding=Q, ivar=_lineJoinStyle, attributes=(assign,nonatomic) */
	lineJoinStyle(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	dashPattern(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	lineCapStyle(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	lineJoinStyle(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setDashPattern(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setLineCapStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setLineJoinStyle(...args: any[]): any;
}

declare class _MSImmutableStyleColorControls extends MSImmutableStylePart {
	/* typeEncoding=d, ivar=_brightness, attributes=(assign,nonatomic) */
	brightness(): number;
	/* typeEncoding=d, ivar=_contrast, attributes=(assign,nonatomic) */
	contrast(): number;
	/* typeEncoding=d, ivar=_hue, attributes=(assign,nonatomic) */
	hue(): number;
	/* typeEncoding=d, ivar=_saturation, attributes=(assign,nonatomic) */
	saturation(): number;

	/* typeEncoding=c16@0:8 */
	static isEnabledByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=d16@0:8 */
	brightness(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	contrast(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	hue(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	saturation(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setBrightness(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setContrast(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHue(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setSaturation(...args: any[]): any;
}

declare class _MSImmutableStyleFill extends MSImmutableStyleBasicFill {
	/* typeEncoding=@"MSImageData", ivar=_image, attributes=(retain,nonatomic) */
	image(): MSImageData;
	/* typeEncoding=q, ivar=_noiseIndex, attributes=(assign,nonatomic) */
	noiseIndex(): number;
	/* typeEncoding=d, ivar=_noiseIntensity, attributes=(assign,nonatomic) */
	noiseIntensity(): number;
	/* typeEncoding=q, ivar=_patternFillType, attributes=(assign,nonatomic) */
	patternFillType(): number;
	/* typeEncoding=d, ivar=_patternTileScale, attributes=(assign,nonatomic) */
	patternTileScale(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	image(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	noiseIndex(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	noiseIntensity(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	patternFillType(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	patternTileScale(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setImage(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setNoiseIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setNoiseIntensity(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPatternFillType(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setPatternTileScale(...args: any[]): any;
}

declare class _MSImmutableStyleInnerShadow extends MSImmutableStyleShadow {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableStylePart extends MSImmutableModelObject {
	/* typeEncoding=c, ivar=_isEnabled, attributes=(assign,nonatomic) */
	isEnabled(): boolean;

	/* typeEncoding=c16@0:8 */
	static isEnabledByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isEnabled(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsEnabled(...args: any[]): any;
}

declare class _MSImmutableStyleShadow extends MSImmutableStylePart {
	/* typeEncoding=d, ivar=_blurRadius, attributes=(assign,nonatomic) */
	blurRadius(): number;
	/* typeEncoding=@"MSImmutableColor", ivar=_color, attributes=(retain,nonatomic) */
	color(): MSImmutableColor;
	/* typeEncoding=@"MSImmutableGraphicsContextSettings", ivar=_contextSettings, attributes=(retain,nonatomic) */
	contextSettings(): MSImmutableGraphicsContextSettings;
	/* typeEncoding=d, ivar=_offsetX, attributes=(assign,nonatomic) */
	offsetX(): number;
	/* typeEncoding=d, ivar=_offsetY, attributes=(assign,nonatomic) */
	offsetY(): number;
	/* typeEncoding=d, ivar=_spread, attributes=(assign,nonatomic) */
	spread(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=d16@0:8 */
	blurRadius(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	color(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	contextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	offsetX(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	offsetY(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setBlurRadius(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setContextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setOffsetX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setOffsetY(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setSpread(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	spread(...args: any[]): any;
}

declare class _MSImmutableStyledLayer extends MSImmutableLayer {
	/* typeEncoding=q, ivar=_clippingMaskMode, attributes=(assign,nonatomic) */
	clippingMaskMode(): number;
	/* typeEncoding=c, ivar=_hasClippingMask, attributes=(assign,nonatomic) */
	hasClippingMask(): boolean;
	/* typeEncoding=@"NSString", ivar=_sharedStyleID, attributes=(retain,nonatomic) */
	sharedStyleID(): NSString;
	/* typeEncoding=@"MSImmutableStyle", ivar=_style, attributes=(retain,nonatomic) */
	style(): MSImmutableStyle;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	clippingMaskMode(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasClippingMask(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setClippingMaskMode(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasClippingMask(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSharedStyleID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setStyle(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sharedStyleID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	style(...args: any[]): any;
}

declare class _MSImmutableSymbol extends MSImmutableSharedObject {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableSymbolContainer extends MSImmutableSharedObjectContainer {
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
}

declare class _MSImmutableSymbolInstance extends MSImmutableStyledLayer {
	/* typeEncoding=d, ivar=_horizontalSpacing, attributes=(assign,nonatomic) */
	horizontalSpacing(): number;
	/* typeEncoding=@"NSArray", ivar=_overrideValues, attributes=(retain,nonatomic) */
	overrideValues(): NSArray;
	/* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
	scale(): number;
	/* typeEncoding=@"NSString", ivar=_symbolID, attributes=(retain,nonatomic) */
	symbolID(): NSString;
	/* typeEncoding=d, ivar=_verticalSpacing, attributes=(assign,nonatomic) */
	verticalSpacing(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	horizontalSpacing(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	overrideValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	scale(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHorizontalSpacing(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setOverrideValues(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setScale(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSymbolID(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setVerticalSpacing(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolID(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	verticalSpacing(...args: any[]): any;
}

declare class _MSImmutableSymbolMaster extends MSImmutableArtboardGroup {
	/* typeEncoding=c, ivar=_allowsOverrides, attributes=(assign,nonatomic) */
	allowsOverrides(): boolean;
	/* typeEncoding=c, ivar=_includeBackgroundColorInInstance, attributes=(assign,nonatomic) */
	includeBackgroundColorInInstance(): boolean;
	/* typeEncoding=@"NSString", ivar=_symbolID, attributes=(retain,nonatomic) */
	symbolID(): NSString;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=c16@0:8 */
	allowsOverrides(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeBackgroundColorInInstance(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setAllowsOverrides(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIncludeBackgroundColorInInstance(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSymbolID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolID(...args: any[]): any;
}

declare class _MSImmutableTextLayer extends MSImmutableStyledLayer {
	/* typeEncoding=@"MSAttributedString", ivar=_attributedString, attributes=(retain,nonatomic) */
	attributedString(): MSAttributedString;
	/* typeEncoding=c, ivar=_automaticallyDrawOnUnderlyingPath, attributes=(assign,nonatomic) */
	automaticallyDrawOnUnderlyingPath(): boolean;
	/* typeEncoding=c, ivar=_dontSynchroniseWithSymbol, attributes=(assign,nonatomic) */
	dontSynchroniseWithSymbol(): boolean;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_glyphBounds, attributes=(assign,nonatomic) */
	glyphBounds(): CGRect;
	/* typeEncoding=c, ivar=_isBeingEdited, attributes=(assign,nonatomic) */
	isBeingEdited(): boolean;
	/* typeEncoding=q, ivar=_lineSpacingBehaviour, attributes=(assign,nonatomic) */
	lineSpacingBehaviour(): number;
	/* typeEncoding=@"MSImageData", ivar=_preview, attributes=(retain,nonatomic) */
	preview(): MSImageData;
	/* typeEncoding=q, ivar=_textBehaviour, attributes=(assign,nonatomic) */
	textBehaviour(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	attributedString(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	automaticallyDrawOnUnderlyingPath(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	dontSynchroniseWithSymbol(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	glyphBounds(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isBeingEdited(...args: any[]): any;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	lineSpacingBehaviour(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	preview(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setAttributedString(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setAutomaticallyDrawOnUnderlyingPath(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDontSynchroniseWithSymbol(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setGlyphBounds(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsBeingEdited(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setLineSpacingBehaviour(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPreview(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setTextBehaviour(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	textBehaviour(...args: any[]): any;
}

declare class _MSImmutableTextStyle extends MSImmutableModelObject {
	/* typeEncoding=@"NSDictionary", ivar=_encodedAttributes, attributes=(copy,nonatomic) */
	encodedAttributes(): NSDictionary;
	/* typeEncoding=q, ivar=_verticalAlignment, attributes=(assign,nonatomic) */
	verticalAlignment(): number;

	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	encodedAttributes(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setEncodedAttributes(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setVerticalAlignment(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	verticalAlignment(...args: any[]): any;
}

declare class _MSImmutableTriangleShape extends MSImmutableShapePathLayer {
	/* typeEncoding=c, ivar=_isEquilateral, attributes=(assign,nonatomic) */
	isEquilateral(): boolean;

	/* typeEncoding=c16@0:8 */
	static isEditedByDefault(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static mutableClass(...args: any[]): any;

	/* typeEncoding=v24@0:8@16 */
	decodePropertiesWithUnarchiver(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	encodePropertiesWithCoder(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c24@0:8@16 */
	isEqualForDiffToObject(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isEquilateral(...args: any[]): any;
	/* typeEncoding=@24@0:8@16 */
	keysDifferingFromObject(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithMutableModelObject(...args: any[]): any;
	/* typeEncoding=@32@0:8@16@24 */
	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsEquilateral(...args: any[]): any;
}

declare class _MSLayer extends MSModelObject {
	/* typeEncoding=q, ivar=_booleanOperation, attributes=(assign,nonatomic) */
	booleanOperation(): number;
	/* typeEncoding=@"MSExportOptions", ivar=_exportOptions, attributes=(retain,nonatomic) */
	exportOptions(): MSExportOptions;
	/* typeEncoding=@"MSFlowConnection", ivar=_flow, attributes=(retain,nonatomic) */
	flow(): MSFlowConnection;
	/* typeEncoding=@"MSRect", ivar=_frame, attributes=(retain,nonatomic) */
	frame(): MSRect;
	/* typeEncoding=c, ivar=_isFixedToViewport, attributes=(assign,nonatomic) */
	isFixedToViewport(): boolean;
	/* typeEncoding=c, ivar=_isFlippedHorizontal, attributes=(assign,nonatomic) */
	isFlippedHorizontal(): boolean;
	/* typeEncoding=c, ivar=_isFlippedVertical, attributes=(assign,nonatomic) */
	isFlippedVertical(): boolean;
	/* typeEncoding=c, ivar=_isLocked, attributes=(assign,nonatomic) */
	isLocked(): boolean;
	/* typeEncoding=c, ivar=_isVisible, attributes=(assign,nonatomic) */
	isVisible(): boolean;
	/* typeEncoding=q, ivar=_layerListExpandedType, attributes=(assign,nonatomic) */
	layerListExpandedType(): number;
	/* typeEncoding=c, ivar=_maintainScrollPosition, attributes=(assign,nonatomic) */
	maintainScrollPosition(): boolean;
	/* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
	name(): NSString;
	/* typeEncoding=c, ivar=_nameIsFixed, attributes=(assign,nonatomic) */
	nameIsFixed(): boolean;
	/* typeEncoding=@"NSString", ivar=_originalObjectID, attributes=(retain,nonatomic) */
	originalObjectID(): NSString;
	/* typeEncoding=Q, ivar=_resizingConstraint, attributes=(assign,nonatomic) */
	resizingConstraint(): number;
	/* typeEncoding=Q, ivar=_resizingType, attributes=(assign,nonatomic) */
	resizingType(): number;
	/* typeEncoding=d, ivar=_rotation, attributes=(assign,nonatomic) */
	rotation(): number;
	/* typeEncoding=c, ivar=_shouldBreakMaskChain, attributes=(assign,nonatomic) */
	shouldBreakMaskChain(): boolean;
	/* typeEncoding=@"NSDictionary", ivar=_userInfo, attributes=(copy,nonatomic) */
	userInfo(): NSDictionary;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	booleanOperation(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	exportOptions(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	flow(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	frame(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isFixedToViewport(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isFlippedHorizontal(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isFlippedVertical(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isLocked(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isVisible(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	layerListExpandedType(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	maintainScrollPosition(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	nameIsFixed(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	originalObjectID(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	resizingConstraint(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	resizingType(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	rotation(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setBooleanOperation(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setExportOptions(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFlow(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFrame(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFixedToViewport(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFlippedHorizontal(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsFlippedVertical(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsLocked(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsVisible(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setLayerListExpandedType(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setMaintainScrollPosition(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setNameIsFixed(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setOriginalObjectID(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setResizingConstraint(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setResizingType(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRotation(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setShouldBreakMaskChain(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setUserInfo(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	shouldBreakMaskChain(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	userInfo(...args: any[]): any;
}

declare class _MSLayerGroup extends MSStyledLayer {
	/* typeEncoding=@"MSGroupLayout", ivar=_groupLayout, attributes=(retain,nonatomic) */
	groupLayout(): MSGroupLayout;
	/* typeEncoding=c, ivar=_hasClickThrough, attributes=(assign,nonatomic) */
	hasClickThrough(): boolean;
	/* typeEncoding=@"NSArray", ivar=_layers, attributes=(retain,nonatomic) */
	layers(): NSArray;
	/* typeEncoding=@"NSString", ivar=_sharedObjectID, attributes=(retain,nonatomic) */
	sharedObjectID(): NSString;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addLayer(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addLayers(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	groupLayout(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasClickThrough(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertLayer_afterLayer(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertLayer_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertLayer_beforeLayer(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertLayers_afterLayer(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertLayers_beforeLayer(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	layers(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveLayerIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllLayers(): void;
	/* typeEncoding=v24@0:8@16 */
	removeLayer(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeLayerAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeLayersAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setGroupLayout(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasClickThrough(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayers(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSharedObjectID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sharedObjectID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSLayoutGrid extends MSBaseGrid {
	/* typeEncoding=d, ivar=_columnWidth, attributes=(assign,nonatomic) */
	columnWidth(): number;
	/* typeEncoding=c, ivar=_drawHorizontal, attributes=(assign,nonatomic) */
	drawHorizontal(): boolean;
	/* typeEncoding=c, ivar=_drawHorizontalLines, attributes=(assign,nonatomic) */
	drawHorizontalLines(): boolean;
	/* typeEncoding=c, ivar=_drawVertical, attributes=(assign,nonatomic) */
	drawVertical(): boolean;
	/* typeEncoding=d, ivar=_gutterHeight, attributes=(assign,nonatomic) */
	gutterHeight(): number;
	/* typeEncoding=d, ivar=_gutterWidth, attributes=(assign,nonatomic) */
	gutterWidth(): number;
	/* typeEncoding=c, ivar=_guttersOutside, attributes=(assign,nonatomic) */
	guttersOutside(): boolean;
	/* typeEncoding=d, ivar=_horizontalOffset, attributes=(assign,nonatomic) */
	horizontalOffset(): number;
	/* typeEncoding=d, ivar=_numberOfColumns, attributes=(assign,nonatomic) */
	numberOfColumns(): number;
	/* typeEncoding=d, ivar=_rowHeightMultiplication, attributes=(assign,nonatomic) */
	rowHeightMultiplication(): number;
	/* typeEncoding=d, ivar=_totalWidth, attributes=(assign,nonatomic) */
	totalWidth(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=d16@0:8 */
	columnWidth(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	drawHorizontal(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	drawHorizontalLines(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	drawVertical(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	gutterHeight(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	gutterWidth(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	guttersOutside(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	horizontalOffset(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=d16@0:8 */
	numberOfColumns(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	rowHeightMultiplication(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setColumnWidth(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDrawHorizontal(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDrawHorizontalLines(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDrawVertical(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setGutterHeight(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setGutterWidth(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setGuttersOutside(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHorizontalOffset(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setNumberOfColumns(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRowHeightMultiplication(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setTotalWidth(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	totalWidth(...args: any[]): any;
}

declare class _MSOvalShape extends MSShapePathLayer {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSPage extends MSLayerGroup {
	/* typeEncoding=@"MSSimpleGrid", ivar=_grid, attributes=(retain,nonatomic) */
	grid(): MSSimpleGrid;
	/* typeEncoding=@"MSRulerData", ivar=_horizontalRulerData, attributes=(retain,nonatomic) */
	horizontalRulerData(): MSRulerData;
	/* typeEncoding=c, ivar=_includeInCloudUpload, attributes=(assign,nonatomic) */
	includeInCloudUpload(): boolean;
	/* typeEncoding=@"MSLayoutGrid", ivar=_layout, attributes=(retain,nonatomic) */
	layout(): MSLayoutGrid;
	/* typeEncoding=@"MSRulerData", ivar=_verticalRulerData, attributes=(retain,nonatomic) */
	verticalRulerData(): MSRulerData;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	grid(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	horizontalRulerData(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	layout(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setGrid(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setHorizontalRulerData(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIncludeInCloudUpload(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setLayout(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setVerticalRulerData(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	verticalRulerData(...args: any[]): any;
}

declare class _MSPolygonShape extends MSShapePathLayer {
	/* typeEncoding=q, ivar=_numberOfPoints, attributes=(assign,nonatomic) */
	numberOfPoints(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=q16@0:8 */
	numberOfPoints(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setNumberOfPoints(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSRect extends MSModelObject {
	/* typeEncoding=c, ivar=_constrainProportions, attributes=(assign,nonatomic) */
	constrainProportions(): boolean;
	/* typeEncoding=d, ivar=_height, attributes=(assign,nonatomic) */
	height(): number;
	/* typeEncoding=d, ivar=_width, attributes=(assign,nonatomic) */
	width(): number;
	/* typeEncoding=d, ivar=_x, attributes=(assign,nonatomic) */
	x(): number;
	/* typeEncoding=d, ivar=_y, attributes=(assign,nonatomic) */
	y(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=c16@0:8 */
	constrainProportions(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	height(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v20@0:8c16 */
	setConstrainProportions(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHeight(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setWidth(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setY(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	width(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	x(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	y(...args: any[]): any;
}

declare class _MSRectangleShape extends MSShapePathLayer {
	/* typeEncoding=d, ivar=_fixedRadius, attributes=(assign,nonatomic) */
	fixedRadius(): number;
	/* typeEncoding=c, ivar=_needsConvertionToNewRoundCorners, attributes=(assign,nonatomic) */
	needsConvertionToNewRoundCorners(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	fixedRadius(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	needsConvertionToNewRoundCorners(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setFixedRadius(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setNeedsConvertionToNewRoundCorners(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSRulerData extends MSModelObject {
	/* typeEncoding=q, ivar=_base, attributes=(assign,nonatomic) */
	base(): number;
	/* typeEncoding=@"NSArray", ivar=_guides, attributes=(copy,nonatomic) */
	guides(): NSArray;
	/* typeEncoding=d, ivar=_temporaryGuide, attributes=(assign,nonatomic) */
	temporaryGuide(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	base(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	guides(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setBase(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGuides(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setTemporaryGuide(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	temporaryGuide(...args: any[]): any;
}

declare class _MSShapeGroup extends MSLayerGroup {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSShapePath extends MSModelObject {
	/* typeEncoding=c, ivar=_isClosed, attributes=(assign,nonatomic) */
	isClosed(): boolean;
	/* typeEncoding=q, ivar=_pointRadiusBehaviour, attributes=(assign,nonatomic) */
	pointRadiusBehaviour(): number;
	/* typeEncoding=@"NSArray", ivar=_points, attributes=(retain,nonatomic) */
	points(): NSArray;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addCurvePoint(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addCurvePoints(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoint_afterCurvePoint(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertCurvePoint_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoint_beforeCurvePoint(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoints_afterCurvePoint(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoints_beforeCurvePoint(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isClosed(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveCurvePointIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	pointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	points(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllCurvePoints(): void;
	/* typeEncoding=v24@0:8@16 */
	removeCurvePoint(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeCurvePointAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeCurvePointsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v20@0:8c16 */
	setIsClosed(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPoints(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSShapePathLayer extends MSStyledLayer {
	/* typeEncoding=c, ivar=_edited, attributes=(assign,nonatomic) */
	edited(): boolean;
	/* typeEncoding=c, ivar=_isClosed, attributes=(assign,nonatomic) */
	isClosed(): boolean;
	/* typeEncoding=q, ivar=_pointRadiusBehaviour, attributes=(assign,nonatomic) */
	pointRadiusBehaviour(): number;
	/* typeEncoding=@"NSArray", ivar=_points, attributes=(retain,nonatomic) */
	points(): NSArray;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	static isEditedByDefault(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addCurvePoint(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addCurvePoints(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	edited(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoint_afterCurvePoint(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertCurvePoint_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoint_beforeCurvePoint(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoints_afterCurvePoint(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertCurvePoints_beforeCurvePoint(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	isClosed(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveCurvePointIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	pointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	points(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllCurvePoints(): void;
	/* typeEncoding=v24@0:8@16 */
	removeCurvePoint(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeCurvePointAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeCurvePointsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v20@0:8c16 */
	setEdited(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsClosed(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPointRadiusBehaviour(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPoints(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSharedObject extends MSModelObject {
	/* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
	name(): NSString;
	/* typeEncoding=@"MSModelObjectCommon", ivar=_value, attributes=(retain,nonatomic) */
	value(): MSModelObjectCommon;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	name(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setName(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setValue(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	value(...args: any[]): any;
}

declare class _MSSharedObjectContainer extends MSModelObject {
	/* typeEncoding=@"NSArray", ivar=_objects, attributes=(retain,nonatomic) */
	objects(): NSArray;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addSharedObject(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addSharedObjects(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertSharedObject_afterSharedObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertSharedObject_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertSharedObject_beforeSharedObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertSharedObjects_afterSharedObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertSharedObjects_beforeSharedObject(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveSharedObjectIndex_toIndex(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	objects(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllSharedObjects(): void;
	/* typeEncoding=v24@0:8@16 */
	removeSharedObject(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeSharedObjectAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeSharedObjectsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setObjects(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSharedStyle extends MSSharedObject {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSharedStyleContainer extends MSSharedObjectContainer {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSharedTextStyleContainer extends MSSharedStyleContainer {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSimpleGrid extends MSBaseGrid {
	/* typeEncoding=q, ivar=_gridSize, attributes=(assign,nonatomic) */
	gridSize(): number;
	/* typeEncoding=q, ivar=_thickGridTimes, attributes=(assign,nonatomic) */
	thickGridTimes(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	gridSize(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setGridSize(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setThickGridTimes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	thickGridTimes(...args: any[]): any;
}

declare class _MSSliceLayer extends MSLayer {
	/* typeEncoding=@"MSColor", ivar=_backgroundColor, attributes=(retain,nonatomic) */
	backgroundColor(): MSColor;
	/* typeEncoding=c, ivar=_hasBackgroundColor, attributes=(assign,nonatomic) */
	hasBackgroundColor(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	backgroundColor(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasBackgroundColor(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setBackgroundColor(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasBackgroundColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStarShape extends MSShapePathLayer {
	/* typeEncoding=q, ivar=_numberOfPoints, attributes=(assign,nonatomic) */
	numberOfPoints(): number;
	/* typeEncoding=d, ivar=_radius, attributes=(assign,nonatomic) */
	radius(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=q16@0:8 */
	numberOfPoints(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	radius(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setNumberOfPoints(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRadius(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStyle extends MSModelObject {
	/* typeEncoding=@"MSStyleBlur", ivar=_blur, attributes=(retain,nonatomic) */
	blur(): MSStyleBlur;
	/* typeEncoding=@"MSStyleBorderOptions", ivar=_borderOptions, attributes=(retain,nonatomic) */
	borderOptions(): MSStyleBorderOptions;
	/* typeEncoding=@"NSArray", ivar=_borders, attributes=(retain,nonatomic) */
	borders(): NSArray;
	/* typeEncoding=@"MSStyleColorControls", ivar=_colorControls, attributes=(retain,nonatomic) */
	colorControls(): MSStyleColorControls;
	/* typeEncoding=@"MSGraphicsContextSettings", ivar=_contextSettings, attributes=(retain,nonatomic) */
	contextSettings(): MSGraphicsContextSettings;
	/* typeEncoding=Q, ivar=_endMarkerType, attributes=(assign,nonatomic) */
	endMarkerType(): number;
	/* typeEncoding=@"NSArray", ivar=_fills, attributes=(retain,nonatomic) */
	fills(): NSArray;
	/* typeEncoding=@"NSArray", ivar=_innerShadows, attributes=(retain,nonatomic) */
	innerShadows(): NSArray;
	/* typeEncoding=q, ivar=_miterLimit, attributes=(assign,nonatomic) */
	miterLimit(): number;
	/* typeEncoding=@"NSArray", ivar=_shadows, attributes=(retain,nonatomic) */
	shadows(): NSArray;
	/* typeEncoding=Q, ivar=_startMarkerType, attributes=(assign,nonatomic) */
	startMarkerType(): number;
	/* typeEncoding=@"MSTextStyle", ivar=_textStyle, attributes=(retain,nonatomic) */
	textStyle(): MSTextStyle;
	/* typeEncoding=Q, ivar=_windingRule, attributes=(assign,nonatomic) */
	windingRule(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addStyleBorder(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addStyleBorders(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addStyleFill(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addStyleFills(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addStyleInnerShadow(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addStyleInnerShadows(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addStyleShadow(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addStyleShadows(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	blur(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	borderOptions(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	borders(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	colorControls(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	contextSettings(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	endMarkerType(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	fills(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=@16@0:8 */
	innerShadows(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleBorder_afterStyleBorder(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertStyleBorder_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleBorder_beforeStyleBorder(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleBorders_afterStyleBorder(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleBorders_beforeStyleBorder(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleFill_afterStyleFill(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertStyleFill_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleFill_beforeStyleFill(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleFills_afterStyleFill(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleFills_beforeStyleFill(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleInnerShadow_afterStyleInnerShadow(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertStyleInnerShadow_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleInnerShadow_beforeStyleInnerShadow(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleInnerShadows_afterStyleInnerShadow(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleInnerShadows_beforeStyleInnerShadow(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleShadow_afterStyleShadow(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertStyleShadow_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleShadow_beforeStyleShadow(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleShadows_afterStyleShadow(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertStyleShadows_beforeStyleShadow(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	miterLimit(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveStyleBorderIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveStyleFillIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveStyleInnerShadowIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveStyleShadowIndex_toIndex(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllStyleBorders(): void;
	/* typeEncoding=v16@0:8 */
	removeAllStyleFills(): void;
	/* typeEncoding=v16@0:8 */
	removeAllStyleInnerShadows(): void;
	/* typeEncoding=v16@0:8 */
	removeAllStyleShadows(): void;
	/* typeEncoding=v24@0:8@16 */
	removeStyleBorder(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeStyleBorderAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeStyleBordersAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeStyleFill(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeStyleFillAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeStyleFillsAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeStyleInnerShadow(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeStyleInnerShadowAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeStyleInnerShadowsAtIndexes(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeStyleShadow(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeStyleShadowAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeStyleShadowsAtIndexes(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setBlur(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setBorderOptions(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setBorders(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setColorControls(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setContextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setEndMarkerType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setFills(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setInnerShadows(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setMiterLimit(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setShadows(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setStartMarkerType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setTextStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setWindingRule(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	shadows(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	startMarkerType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	textStyle(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	windingRule(...args: any[]): any;
}

declare class _MSStyleBasicFill extends MSStylePart {
	/* typeEncoding=@"MSColor", ivar=_color, attributes=(retain,nonatomic) */
	color(): MSColor;
	/* typeEncoding=@"MSGraphicsContextSettings", ivar=_contextSettings, attributes=(retain,nonatomic) */
	contextSettings(): MSGraphicsContextSettings;
	/* typeEncoding=Q, ivar=_fillType, attributes=(assign,nonatomic) */
	fillType(): number;
	/* typeEncoding=@"MSGradient", ivar=_gradient, attributes=(retain,nonatomic) */
	gradient(): MSGradient;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	color(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	contextSettings(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	fillType(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	gradient(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setContextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setFillType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setGradient(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStyleBlur extends MSStylePart {
	/* typeEncoding={CGPoint=dd}, ivar=_center, attributes=(assign,nonatomic) */
	center(): CGPoint;
	/* typeEncoding=d, ivar=_motionAngle, attributes=(assign,nonatomic) */
	motionAngle(): number;
	/* typeEncoding=d, ivar=_radius, attributes=(assign,nonatomic) */
	radius(): number;
	/* typeEncoding=d, ivar=_saturation, attributes=(assign,nonatomic) */
	saturation(): number;
	/* typeEncoding=Q, ivar=_type, attributes=(assign,nonatomic) */
	type(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding={CGPoint=dd}16@0:8 */
	center(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=d16@0:8 */
	motionAngle(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	radius(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	saturation(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v32@0:8{CGPoint=dd}16 */
	setCenter(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setMotionAngle(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setRadius(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setSaturation(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setType(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	type(...args: any[]): any;
}

declare class _MSStyleBorder extends MSStyleBasicFill {
	/* typeEncoding=q, ivar=_position, attributes=(assign,nonatomic) */
	position(): number;
	/* typeEncoding=d, ivar=_thickness, attributes=(assign,nonatomic) */
	thickness(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	position(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setPosition(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setThickness(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	thickness(...args: any[]): any;
}

declare class _MSStyleBorderOptions extends MSStylePart {
	/* typeEncoding=@"NSArray", ivar=_dashPattern, attributes=(copy,nonatomic) */
	dashPattern(): NSArray;
	/* typeEncoding=Q, ivar=_lineCapStyle, attributes=(assign,nonatomic) */
	lineCapStyle(): number;
	/* typeEncoding=Q, ivar=_lineJoinStyle, attributes=(assign,nonatomic) */
	lineJoinStyle(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	dashPattern(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=Q16@0:8 */
	lineCapStyle(...args: any[]): any;
	/* typeEncoding=Q16@0:8 */
	lineJoinStyle(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setDashPattern(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setLineCapStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	setLineJoinStyle(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStyleColorControls extends MSStylePart {
	/* typeEncoding=d, ivar=_brightness, attributes=(assign,nonatomic) */
	brightness(): number;
	/* typeEncoding=d, ivar=_contrast, attributes=(assign,nonatomic) */
	contrast(): number;
	/* typeEncoding=d, ivar=_hue, attributes=(assign,nonatomic) */
	hue(): number;
	/* typeEncoding=d, ivar=_saturation, attributes=(assign,nonatomic) */
	saturation(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=d16@0:8 */
	brightness(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	contrast(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	hue(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	saturation(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setBrightness(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setContrast(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setHue(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setSaturation(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStyleFill extends MSStyleBasicFill {
	/* typeEncoding=@"MSImageData", ivar=_image, attributes=(retain,nonatomic) */
	image(): MSImageData;
	/* typeEncoding=q, ivar=_noiseIndex, attributes=(assign,nonatomic) */
	noiseIndex(): number;
	/* typeEncoding=d, ivar=_noiseIntensity, attributes=(assign,nonatomic) */
	noiseIntensity(): number;
	/* typeEncoding=q, ivar=_patternFillType, attributes=(assign,nonatomic) */
	patternFillType(): number;
	/* typeEncoding=d, ivar=_patternTileScale, attributes=(assign,nonatomic) */
	patternTileScale(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	image(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=q16@0:8 */
	noiseIndex(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	noiseIntensity(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	patternFillType(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	patternTileScale(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setImage(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setNoiseIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setNoiseIntensity(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setPatternFillType(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setPatternTileScale(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStyleInnerShadow extends MSStyleShadow {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStylePart extends MSModelObject {
	/* typeEncoding=c, ivar=_isEnabled, attributes=(assign,nonatomic) */
	isEnabled(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	static isEnabledByDefault(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isEnabled(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v20@0:8c16 */
	setIsEnabled(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStyleShadow extends MSStylePart {
	/* typeEncoding=d, ivar=_blurRadius, attributes=(assign,nonatomic) */
	blurRadius(): number;
	/* typeEncoding=@"MSColor", ivar=_color, attributes=(retain,nonatomic) */
	color(): MSColor;
	/* typeEncoding=@"MSGraphicsContextSettings", ivar=_contextSettings, attributes=(retain,nonatomic) */
	contextSettings(): MSGraphicsContextSettings;
	/* typeEncoding=d, ivar=_offsetX, attributes=(assign,nonatomic) */
	offsetX(): number;
	/* typeEncoding=d, ivar=_offsetY, attributes=(assign,nonatomic) */
	offsetY(): number;
	/* typeEncoding=d, ivar=_spread, attributes=(assign,nonatomic) */
	spread(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=d16@0:8 */
	blurRadius(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	color(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	contextSettings(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=d16@0:8 */
	offsetX(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	offsetY(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setBlurRadius(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setColor(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setContextSettings(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setOffsetX(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setOffsetY(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setSpread(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	spread(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSStyledLayer extends MSLayer {
	/* typeEncoding=q, ivar=_clippingMaskMode, attributes=(assign,nonatomic) */
	clippingMaskMode(): number;
	/* typeEncoding=c, ivar=_hasClippingMask, attributes=(assign,nonatomic) */
	hasClippingMask(): boolean;
	/* typeEncoding=@"NSString", ivar=_sharedStyleID, attributes=(retain,nonatomic) */
	sharedStyleID(): NSString;
	/* typeEncoding=@"MSStyle", ivar=_style, attributes=(retain,nonatomic) */
	style(): MSStyle;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=q16@0:8 */
	clippingMaskMode(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasClippingMask(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8q16 */
	setClippingMaskMode(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setHasClippingMask(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSharedStyleID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setStyle(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	sharedStyleID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	style(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSymbol extends MSSharedObject {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSymbolContainer extends MSSharedObjectContainer {
	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSSymbolInstance extends MSStyledLayer {
	/* typeEncoding=d, ivar=_horizontalSpacing, attributes=(assign,nonatomic) */
	horizontalSpacing(): number;
	/* typeEncoding=@"NSArray", ivar=_overrideValues, attributes=(retain,nonatomic) */
	overrideValues(): NSArray;
	/* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
	scale(): number;
	/* typeEncoding=@"NSString", ivar=_symbolID, attributes=(retain,nonatomic) */
	symbolID(): NSString;
	/* typeEncoding=d, ivar=_verticalSpacing, attributes=(assign,nonatomic) */
	verticalSpacing(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v24@0:8@16 */
	addOverrideValue(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	addOverrideValues(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	horizontalSpacing(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v32@0:8@16@24 */
	insertOverrideValue_afterOverrideValue(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	insertOverrideValue_atIndex(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertOverrideValue_beforeOverrideValue(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertOverrideValues_afterOverrideValue(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	insertOverrideValues_beforeOverrideValue(...args: any[]): any;
	/* typeEncoding=v32@0:8Q16Q24 */
	moveOverrideValueIndex_toIndex(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	overrideValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	removeAllOverrideValues(): void;
	/* typeEncoding=v24@0:8@16 */
	removeOverrideValue(...args: any[]): any;
	/* typeEncoding=v24@0:8Q16 */
	removeOverrideValueAtIndex(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	removeOverrideValuesAtIndexes(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	scale(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8d16 */
	setHorizontalSpacing(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setOverrideValues(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setScale(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSymbolID(...args: any[]): any;
	/* typeEncoding=v24@0:8d16 */
	setVerticalSpacing(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=d16@0:8 */
	verticalSpacing(...args: any[]): any;
}

declare class _MSSymbolMaster extends MSArtboardGroup {
	/* typeEncoding=c, ivar=_allowsOverrides, attributes=(assign,nonatomic) */
	allowsOverrides(): boolean;
	/* typeEncoding=c, ivar=_includeBackgroundColorInInstance, attributes=(assign,nonatomic) */
	includeBackgroundColorInInstance(): boolean;
	/* typeEncoding=@"NSString", ivar=_symbolID, attributes=(retain,nonatomic) */
	symbolID(): NSString;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=c16@0:8 */
	allowsOverrides(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	includeBackgroundColorInInstance(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setAllowsOverrides(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v20@0:8c16 */
	setIncludeBackgroundColorInInstance(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setSymbolID(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	symbolID(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSTextLayer extends MSStyledLayer {
	/* typeEncoding=@"MSAttributedString", ivar=_attributedString, attributes=(retain,nonatomic) */
	attributedString(): MSAttributedString;
	/* typeEncoding=c, ivar=_automaticallyDrawOnUnderlyingPath, attributes=(assign,nonatomic) */
	automaticallyDrawOnUnderlyingPath(): boolean;
	/* typeEncoding=c, ivar=_dontSynchroniseWithSymbol, attributes=(assign,nonatomic) */
	dontSynchroniseWithSymbol(): boolean;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_glyphBounds, attributes=(assign,nonatomic) */
	glyphBounds(): CGRect;
	/* typeEncoding=c, ivar=_isBeingEdited, attributes=(assign,nonatomic) */
	isBeingEdited(): boolean;
	/* typeEncoding=q, ivar=_lineSpacingBehaviour, attributes=(assign,nonatomic) */
	lineSpacingBehaviour(): number;
	/* typeEncoding=@"MSImageData", ivar=_preview, attributes=(retain,nonatomic) */
	preview(): MSImageData;
	/* typeEncoding=q, ivar=_textBehaviour, attributes=(assign,nonatomic) */
	textBehaviour(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=@16@0:8 */
	attributedString(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	automaticallyDrawOnUnderlyingPath(...args: any[]): any;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	dontSynchroniseWithSymbol(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
	glyphBounds(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isBeingEdited(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	lineSpacingBehaviour(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	preview(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setAttributedString(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setAutomaticallyDrawOnUnderlyingPath(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setDontSynchroniseWithSymbol(...args: any[]): any;
	/* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
	setGlyphBounds(...args: any[]): any;
	/* typeEncoding=v20@0:8c16 */
	setIsBeingEdited(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setLineSpacingBehaviour(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	setPreview(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setTextBehaviour(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	textBehaviour(...args: any[]): any;
}

declare class _MSTextStyle extends MSModelObject {
	/* typeEncoding=@"NSDictionary", ivar=_encodedAttributes, attributes=(copy,nonatomic) */
	encodedAttributes(): NSDictionary;
	/* typeEncoding=q, ivar=_verticalAlignment, attributes=(assign,nonatomic) */
	verticalAlignment(): number;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v16@0:8 */
	_cxx_destruct(): void;
	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=@16@0:8 */
	encodedAttributes(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v24@0:8@16 */
	setEncodedAttributes(...args: any[]): any;
	/* typeEncoding=v24@0:8q16 */
	setVerticalAlignment(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
	/* typeEncoding=q16@0:8 */
	verticalAlignment(...args: any[]): any;
}

declare class _MSTriangleShape extends MSShapePathLayer {
	/* typeEncoding=c, ivar=_isEquilateral, attributes=(assign,nonatomic) */
	isEquilateral(): boolean;

	/* typeEncoding=c16@0:8 */
	static allowsFaulting(...args: any[]): any;
	/* typeEncoding=#16@0:8 */
	static immutableClass(...args: any[]): any;

	/* typeEncoding=v32@0:8@16Q24 */
	copyPropertiesToObject_options(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateChildProperties(...args: any[]): any;
	/* typeEncoding=v24@0:8@?16 */
	enumerateProperties(...args: any[]): any;
	/* typeEncoding=c16@0:8 */
	hasDefaultValues(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	initializeUnsetObjectPropertiesWithDefaults(): void;
	/* typeEncoding=c16@0:8 */
	isEquilateral(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	performInitEmptyObject(): void;
	/* typeEncoding=v24@0:8@16 */
	performInitWithImmutableModelObject(...args: any[]): any;
	/* typeEncoding=v32@0:8@16@24 */
	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
	/* typeEncoding=c32@0:8@16Q24 */
	propertiesAreEqual_forPurpose(...args: any[]): any;
	/* typeEncoding=v16@0:8 */
	setAsParentOnChildren(): void;
	/* typeEncoding=v20@0:8c16 */
	setIsEquilateral(...args: any[]): any;
	/* typeEncoding=v24@0:8@16 */
	syncPropertiesFromObject(...args: any[]): any;
}

