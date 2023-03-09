// JSON to interface https://quicktype.io/typescript

export interface RocketI {
    height: Diameter;
    diameter: Diameter;
    mass: Mass;
    first_stage: FirstStage;
    second_stage: SecondStage;
    engines: Engines;
    landing_legs: LandingLegs;
    payload_weights: PayloadWeight[];
    flickr_images: string[];
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: Date;
    country: string;
    company: string;
    wikipedia: string;
    description: string;
    id: string;
}

export interface Diameter {
    meters: number | null;
    feet: number | null;
}

export interface Engines {
    isp: ISP;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    number: number;
    type: string;
    version: string;
    layout: null | string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
}

export interface ISP {
    sea_level: number;
    vacuum: number;
}

export interface Thrust {
    kN: number;
    lbf: number;
}

export interface FirstStage {
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
}

export interface LandingLegs {
    number: number;
    material: null | string;
}

export interface Mass {
    kg: number;
    lb: number;
}

export interface PayloadWeight {
    id: string;
    name: string;
    kg: number;
    lb: number;
}

export interface SecondStage {
    thrust: Thrust;
    payloads: Payloads;
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
}

export interface Payloads {
    composite_fairing: CompositeFairing;
    option_1: string;
}

export interface CompositeFairing {
    height: Diameter;
    diameter: Diameter;
}
// Launch
export interface LaunchI {
    fairings: Fairings | null;
    links: Links;
    static_fire_date_utc: Date | null;
    static_fire_date_unix: number | null;
    net: boolean;
    window: number | null;
    rocket: string;
    success: boolean | null;
    failures: Failure[];
    details: null | string;
    crew: string[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: Date;
    date_unix: number;
    date_local: Date;
    date_precision: DatePrecision;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: null | string;
    id: string;
}

export interface Core {
    core: null | string;
    flight: number | null;
    gridfins: boolean | null;
    legs: boolean | null;
    reused: boolean | null;
    landing_attempt: boolean | null;
    landing_success: boolean | null;
    landing_type: LandingType | null;
    landpad: string | null;
}

export enum LandingType {
    Asds = "ASDS",
    Ocean = "Ocean",
    Rtls = "RTLS",
}

export enum DatePrecision {
    Day = "day",
    Hour = "hour",
    Month = "month",
}

export interface Failure {
    time: number;
    altitude: number | null;
    reason: string;
}

export interface Fairings {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
}


export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: null | string;
    webcast: null | string;
    youtube_id: null | string;
    article: null | string;
    wikipedia: null | string;
}

export interface Flickr {
    small: any[];
    original: string[];
}

export interface Patch {
    small: string;
    large: string;
}

export interface Reddit {
    campaign: null | string;
    launch: null | string;
    media: null | string;
    recovery: null | string;
}


// Launchpad
export interface LaunchpadI {
    images: Images;
    name: string;
    full_name: string;
    locality: string;
    region: string;
    latitude: number;
    longitude: number;
    launch_attempts: number;
    launch_successes: number;
    rockets: string[];
    timezone: string;
    launches: string[];
    status: string;
    details: string;
    id: string;
}

export interface Images {
    large: string[];
}
// Landpad
export interface LandpadI {
    images: Images;
    name: string;
    full_name: string;
    status: string;
    type: string;
    locality: string;
    region: string;
    latitude: number;
    longitude: number;
    landing_attempts: number;
    landing_successes: number;
    wikipedia: string;
    details: string;
    launches: string[];
    id: string;
}

export interface Images {
    large: string[];
}
// Company
export interface CompanyI {
    headquarters: Headquarters;
    links: Links;
    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    summary: string;
    id: string;
}

export interface Headquarters {
    address: string;
    city: string;
    state: string;
}

export interface Links {
    website: string;
    flickr: Flickr;
    twitter: string;
    elon_twitter: string;
}
// Payloads
export interface PayloadI {
    dragon: Dragon;
    name: string;
    type: Type;
    reused: boolean;
    launch: string;
    customers: string[];
    norad_ids: number[];
    nationalities: string[];
    manufacturers: string[];
    mass_kg: number | null;
    mass_lbs: number | null;
    orbit: Orbit | null;
    reference_system: ReferenceSystem | null;
    regime: Regime | null;
    longitude: number | null;
    semi_major_axis_km: number | null;
    eccentricity: number | null;
    periapsis_km: number | null;
    apoapsis_km: number | null;
    inclination_deg: number | null;
    period_min: number | null;
    lifespan_years: number | null;
    epoch: Date | null;
    mean_motion: number | null;
    raan: number | null;
    arg_of_pericenter: number | null;
    mean_anomaly: number | null;
    id: string;
}

export interface Dragon {
    capsule: null | string;
    mass_returned_kg: number | null;
    mass_returned_lbs: number | null;
    flight_time_sec: number | null;
    manifest: null | string;
    water_landing: boolean | null;
    land_landing: boolean | null;
}

export enum Orbit {
    Beo = "BEO",
    EsL1 = "ES-L1",
    Geo = "GEO",
    Gto = "GTO",
    Hco = "HCO",
    Heo = "HEO",
    Iss = "ISS",
    Leo = "LEO",
    Meo = "MEO",
    Po = "PO",
    So = "SO",
    Sso = "SSO",
    Tli = "TLI",
    Vleo = "VLEO",
}

export enum ReferenceSystem {
    Geocentric = "geocentric",
    Heliocentric = "heliocentric",
    HighlyElliptical = "highly-elliptical",
    TransLunarInjection = "trans-lunar-injection",
}

export enum Regime {
    BeyondEarth = "beyond-earth",
    Geostationary = "geostationary",
    Geosynchronous = "geosynchronous",
    HighEarth = "high-earth",
    HighlyElliptical = "highly-elliptical",
    L1Point = "L1-point",
    LowEarth = "low-earth",
    Lunar = "lunar",
    MediumEarth = "medium-earth",
    Polar = "polar",
    SemiSynchronous = "semi-synchronous",
    SubOrbital = "sub-orbital",
    SunSynchronous = "sun-synchronous",
    VeryLowEarth = "very-low-earth",
}

export enum Type {
    CrewDragon = "Crew Dragon",
    Dragon10 = "Dragon 1.0",
    Dragon11 = "Dragon 1.1",
    Dragon20 = "Dragon 2.0",
    DragonBoilerplate = "Dragon Boilerplate",
    Lander = "Lander",
    Satellite = "Satellite",
}

// Starlinks
export interface StarlinkI {
    spaceTrack: SpaceTrack;
    launch: string;
    version: string;
    height_km: number;
    latitude: number;
    longitude: number;
    velocity_kms: number;
    id: string;
}

export interface SpaceTrack {
    CCSDS_OMM_VERS: string;
    COMMENT: string;
    CREATION_DATE: Date;
    ORIGINATOR: string;
    OBJECT_NAME: string;
    OBJECT_ID: string;
    CENTER_NAME: string;
    REF_FRAME: string;
    TIME_SYSTEM: string;
    MEAN_ELEMENT_THEORY: string;
    EPOCH: Date;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    EPHEMERIS_TYPE: number;
    CLASSIFICATION_TYPE: string;
    NORAD_CAT_ID: number;
    ELEMENT_SET_NO: number;
    REV_AT_EPOCH: number;
    BSTAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    SEMIMAJOR_AXIS: number;
    PERIOD: number;
    APOAPSIS: number;
    PERIAPSIS: number;
    OBJECT_TYPE: string;
    RCS_SIZE: string;
    COUNTRY_CODE: string;
    LAUNCH_DATE: Date;
    SITE: string;
    DECAY_DATE: Date;
    DECAYED: number;
    FILE: number;
    GP_ID: number;
    TLE_LINE0: string;
    TLE_LINE1: string;
    TLE_LINE2: string;
}
// Roadster
export interface RoadsterI {
    name: string;
    launch_date_utc: Date;
    launch_date_unix: number;
    launch_mass_kg: number;
    launch_mass_lbs: number;
    norad_id: number;
    epoch_jd: number;
    orbit_type: string;
    apoapsis_au: number;
    periapsis_au: number;
    semi_major_axis_au: number;
    eccentricity: number;
    inclination: number;
    longitude: number;
    periapsis_arg: number;
    period_days: number;
    speed_kph: number;
    speed_mph: number;
    earth_distance_km: number;
    earth_distance_mi: number;
    mars_distance_km: number;
    mars_distance_mi: number;
    flickr_images: string[];
    wikipedia: string;
    video: string;
    details: string;
    id: string;
}
// Dragons

export interface DragonI {
    heat_shield: HeatShield;
    launch_payload_mass: PayloadMass;
    launch_payload_vol: LaunchPayloadVol;
    return_payload_mass: PayloadMass;
    return_payload_vol: LaunchPayloadVol;
    pressurized_capsule: PressurizedCapsule;
    trunk: Trunk;
    height_w_trunk: Diameter;
    diameter: Diameter;
    first_flight: Date;
    flickr_images: string[];
    name: string;
    type: string;
    active: boolean;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    dry_mass_kg: number;
    dry_mass_lb: number;
    thrusters: Thruster[];
    wikipedia: string;
    description: string;
    id: string;
}

export interface HeatShield {
    material: string;
    size_meters: number;
    temp_degrees: number;
    dev_partner: string;
}

export interface PayloadMass {
    kg: number;
    lb: number;
}

export interface LaunchPayloadVol {
    cubic_meters: number;
    cubic_feet: number;
}

export interface PressurizedCapsule {
    payload_volume: LaunchPayloadVol;
}

export interface Thruster {
    type: string;
    amount: number;
    pods: number;
    fuel_1: string;
    fuel_2: string;
    isp: number;
    thrust: Thrust;
}

export interface Thrust {
    kN: number;
    lbf: number;
}

export interface Trunk {
    trunk_volume: LaunchPayloadVol;
    cargo: Cargo;
}

export interface Cargo {
    solar_array: number;
    unpressurized_cargo: boolean;
}
