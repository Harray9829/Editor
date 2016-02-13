
declare module BABYLON {
    class PBRMaterial extends BABYLON.Material {
        directIntensity: number;
        emissiveIntensity: number;
        environmentIntensity: number;
        specularIntensity: number;
        private _lightingInfos;
        overloadedShadowIntensity: number;
        overloadedShadeIntensity: number;
        private _overloadedShadowInfos;
        cameraExposure: number;
        cameraContrast: number;
        private _cameraInfos;
        overloadedAmbientIntensity: number;
        overloadedAlbedoIntensity: number;
        overloadedReflectivityIntensity: number;
        overloadedEmissiveIntensity: number;
        private _overloadedIntensity;
        overloadedAmbient: Color3;
        overloadedAlbedo: Color3;
        overloadedReflectivity: Color3;
        overloadedEmissive: Color3;
        overloadedReflection: Color3;
        overloadedMicroSurface: number;
        overloadedMicroSurfaceIntensity: number;
        overloadedReflectionIntensity: number;
        private _overloadedMicroSurface;
        disableBumpMap: boolean;
        albedoTexture: BaseTexture;
        ambientTexture: BaseTexture;
        opacityTexture: BaseTexture;
        reflectionTexture: BaseTexture;
        emissiveTexture: BaseTexture;
        reflectivityTexture: BaseTexture;
        bumpTexture: BaseTexture;
        lightmapTexture: BaseTexture;
        refractionTexture: BaseTexture;
        ambientColor: Color3;
        albedoColor: Color3;
        reflectivityColor: Color3;
        reflectionColor: Color3;
        microSurface: number;
        emissiveColor: Color3;
        useAlphaFromAlbedoTexture: boolean;
        useEmissiveAsIllumination: boolean;
        linkEmissiveWithAlbedo: boolean;
        useSpecularOverAlpha: boolean;
        disableLighting: boolean;
        indexOfRefraction: number;
        invertRefractionY: boolean;
        linkRefractionWithTransparency: boolean;
        useLightmapAsShadowmap: boolean;
        opacityFresnelParameters: FresnelParameters;
        emissiveFresnelParameters: FresnelParameters;
        useMicroSurfaceFromReflectivityMapAlpha: boolean;
        private _renderTargets;
        private _worldViewProjectionMatrix;
        private _globalAmbientColor;
        private _tempColor;
        private _renderId;
        private _defines;
        private _cachedDefines;
        private _useLogarithmicDepth;
        constructor(name: string, scene: Scene);
        useLogarithmicDepth: boolean;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        private _shouldUseAlphaFromAlbedoTexture();
        getAlphaTestTexture(): BaseTexture;
        private _checkCache(scene, mesh?, useInstances?);
        static PrepareDefinesForLights(scene: Scene, mesh: AbstractMesh, defines: MaterialDefines): boolean;
        private static _scaledAlbedo;
        private static _scaledReflectivity;
        private static _scaledEmissive;
        private static _scaledReflection;
        static BindLights(scene: Scene, mesh: AbstractMesh, effect: Effect, defines: MaterialDefines): void;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        unbind(): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        private _myScene;
        private _myShadowGenerator;
        bind(world: Matrix, mesh?: Mesh): void;
        getAnimatables(): IAnimatable[];
        dispose(forceDisposeEffect?: boolean): void;
        clone(name: string): PBRMaterial;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): PBRMaterial;
    }
}
