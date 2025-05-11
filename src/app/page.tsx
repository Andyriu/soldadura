"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import soldaduraImage from './soldadura.jpg';
// Tipos globales
type TabType = "introduccion" | "reacciones" | "materiales" | "simulador";
type MaterialType = "acero" | "aluminio" | "cobre";
type GasType = "CO2" | "argon" | "mezcla" | "ninguno";

type Reaction = {
    id: number;
    name: string;
    equation: string;
    description: string;
};

type Material = {
    name: string;
    composition: string;
    function: string;
};

type Result = {
    quality: "Excelente" | "Buena" | "Aceptable" | "Deficiente";
    problems: string[];
    reaction: string;
};

export default function Home() {
    const [activeTab, setActiveTab] = useState<TabType>("introduccion");

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <Head>
                <title>Química en la Soldadura</title>
                <meta
                    name="description"
                    content="Aplicación de conceptos químicos en procesos de soldadura"
                />
                <meta name="theme-color" content="#0f172a" />
            </Head>

            <header className="bg-gray-900 text-purple-400 p-6 shadow-lg rounded-b-2xl border-b border-purple-900">
                <h1 className="text-3xl font-extrabold tracking-tight">
                    Química en los Procesos de Soldadura
                </h1>
            </header>

            <nav className="bg-gray-900 shadow-lg mx-4 mt-6 rounded-xl border border-gray-800">
                <div className="flex overflow-x-auto p-1">
                    {([
                        "introduccion",
                        "reacciones",
                        "materiales",
                        "simulador",
                    ] as TabType[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 font-bold rounded-lg mx-1 transition-all ${
                                activeTab === tab
                                    ? "bg-purple-700 text-white shadow-purple-sm"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-300"
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </nav>

            <main className="container mx-auto p-4 max-w-6xl">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
                    {activeTab === "introduccion" && <Introduccion />}
                    {activeTab === "reacciones" && <Reacciones />}
                    {activeTab === "materiales" && <Materiales />}
                    {activeTab === "simulador" && <Simulador />}
                </div>
            </main>

            <footer className="bg-gray-900/50 text-purple-300 p-4 text-center text-sm mt-8 border-t border-gray-800">
                <p>
                    <strong>Proyecto ACA</strong> - Fundamentos de Química ©
                    {" "}
                    {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}

function Introduccion() {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400 border-b border-purple-900 pb-2">
                Introducción a la Química en la Soldadura
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-purple-900/30">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Image
                        src={soldaduraImage}
                        alt="Proceso de soldadura"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                </div>
                <div>
                    <p className="mb-4 text-gray-300 leading-relaxed">
                        La soldadura es un proceso fundamental en la industria,
                        pero{" "}
                        <strong>
                            ¿sabías que detrás de cada soldadura hay complejas
                            reacciones químicas?
                        </strong>
                    </p>
                    <p className="mb-4 text-gray-300 leading-relaxed">
                        En esta aplicación exploraremos los{" "}
                        <strong>principios químicos</strong>{" "}
                        que hacen posible la unión de metales:
                    </p>
                    <ul className="space-y-3">
                        {[
                            "Reacciones de combustión y oxidación a altas temperaturas",
                            "Composición química de materiales y fundentes",
                            "Transferencia de energía y cambios de estado",
                            "Protección contra la oxidación con gases inertes",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span className="text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-purple-300 font-medium">
                        Selecciona las pestañas para explorar cada tema en
                        profundidad.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Reacciones() {
    const [showDetail, setShowDetail] = useState<number | null>(null);

    const reactions: Reaction[] = [
        {
            id: 1,
            name: "Combustión del acetileno",
            equation: "2 C₂H₂ + 5 O₂ → 4 CO₂ + 2 H₂O + Energía",
            description:
                "En la soldadura oxiacetilénica, el acetileno (C₂H₂) se quema con oxígeno produciendo una llama de hasta 3,500°C. Esta reacción es exotérmica y proporciona el calor necesario para fundir los metales.",
        },
        {
            id: 2,
            name: "Oxidación del metal base",
            equation: "2 Fe + O₂ → 2 FeO",
            description:
                "El hierro se oxida en presencia de oxígeno a altas temperaturas, formando óxido de hierro (II). Este es uno de los principales desafíos en soldadura, por eso se usan gases protectores.",
        },
        {
            id: 3,
            name: "Formación de escoria protectora",
            equation: "FeO + SiO₂ → FeSiO₃",
            description:
                "Los fundentes contienen sílice (SiO₂) que reacciona con los óxidos formando escoria líquida que flota sobre el baño de soldadura, protegiéndolo de la oxidación.",
        },
    ];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400 border-b border-purple-900 pb-2">
                Reacciones Químicas Clave
            </h2>
            <p className="mb-8 text-gray-300 max-w-3xl">
                Durante el proceso de soldadura ocurren diversas reacciones
                químicas que determinan la calidad de la unión.{" "}
                <strong>Conócelas a continuación:</strong>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reactions.map((reaction) => (
                    <div
                        key={reaction.id}
                        className="border border-gray-800 rounded-xl p-6 bg-gray-900/50 hover:bg-gray-900 transition-all shadow-lg hover:shadow-purple-900/10"
                    >
                        <h3 className="font-bold text-xl text-purple-300 mb-3">
                            {reaction.name}
                        </h3>
                        <div className="bg-gray-800 p-3 rounded-lg mb-4">
                            <p className="font-mono text-purple-200 text-center">
                                {reaction.equation}
                            </p>
                        </div>
                        <button
                            onClick={() =>
                                setShowDetail(
                                    showDetail === reaction.id
                                        ? null
                                        : reaction.id,
                                )}
                            className="text-purple-400 hover:text-purple-300 text-sm font-bold transition-colors flex items-center"
                        >
                            {showDetail === reaction.id
                                ? (
                                    <>
                                        <span className="mr-1">▲</span> Ocultar
                                    </>
                                )
                                : (
                                    <>
                                        <span className="mr-1">▼</span>{" "}
                                        Ver explicación
                                    </>
                                )}
                        </button>
                        {showDetail === reaction.id && (
                            <p className="mt-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg animate-fadeIn">
                                {reaction.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Materiales() {
    const materials: Material[] = [
        {
            name: "Electrodos revestidos",
            composition:
                "Núcleo: Acero al carbono (Fe, C) | Revestimiento: Celulosa, CaCO₃, TiO₂, SiO₂",
            function:
                "El núcleo aporta material de aporte. El revestimiento genera gases protectores (CO₂, H₂) y escoria (CaO, SiO₂) que protege el baño fundido.",
        },
        {
            name: "Gases protectores",
            composition: "Argón (Ar), CO₂, Helio (He) o mezclas (75%Ar+25%CO₂)",
            function:
                "Protegen el baño de soldadura del oxígeno y nitrógeno atmosféricos. El argón es inerte, mientras el CO₂ tiene efecto termoconductor.",
        },
        {
            name: "Fundentes",
            composition:
                "Sílice (SiO₂), fluoruros (CaF₂), óxidos metálicos (TiO₂, Al₂O₃)",
            function:
                "Forman escoria que protege el metal fundido, estabilizan el arco eléctrico y eliminan impurezas mediante reacciones químicas.",
        },
    ];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400 border-b border-purple-900 pb-2">
                Materiales y Composición Química
            </h2>
            <p className="mb-8 text-gray-300 max-w-3xl">
                Los materiales utilizados en soldadura tienen{" "}
                <strong>propiedades químicas específicas</strong>{" "}
                que determinan su comportamiento:
            </p>

            <div className="space-y-6">
                {materials.map((material, index) => (
                    <div
                        key={index}
                        className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/20 shadow-lg"
                    >
                        <h3 className="font-bold text-xl text-purple-300 mb-4 flex items-center">
                            <span className="bg-purple-900/30 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                {index + 1}
                            </span>
                            {material.name}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-bold text-purple-200 mb-2">
                                    Composición:
                                </h4>
                                <p className="text-gray-300">
                                    {material.composition}
                                </p>
                            </div>

                            <div className="bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-bold text-purple-200 mb-2">
                                    Función:
                                </h4>
                                <p className="text-gray-300">
                                    {material.function}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Simulador() {
    const [temperature, setTemperature] = useState<number>(1500);
    const [material, setMaterial] = useState<MaterialType>("acero");
    const [gas, setGas] = useState<GasType>("CO2");
    const [result, setResult] = useState<Result | null>(null);

    const handleSimulate = () => {
        const problems: string[] = [];
        let quality: "Excelente" | "Buena" | "Aceptable" | "Deficiente" =
            "Excelente";

        // Lógica de simulación mejorada
        if (material === "acero") {
            if (temperature < 1300) {
                quality = "Deficiente";
                problems.push(
                    "Temperatura insuficiente para fundir el acero (punto de fusión ~1538°C)",
                );
            } else if (temperature < 1500) {
                quality = "Aceptable";
                problems.push(
                    "Temperatura en límite inferior para soldadura de acero",
                );
            } else if (temperature > 2500) {
                quality = "Buena";
                problems.push(
                    "Temperatura muy alta, puede afectar propiedades mecánicas",
                );
            }
        } else if (material === "aluminio") {
            if (temperature < 500) {
                quality = "Deficiente";
                problems.push(
                    "Temperatura insuficiente para fundir aluminio (punto de fusión ~660°C)",
                );
            } else if (temperature > 1200) {
                quality = "Deficiente";
                problems.push(
                    "El aluminio puede quemarse y formar óxidos no deseados",
                );
            }
        } else if (material === "cobre") {
            if (temperature < 900) {
                quality = "Deficiente";
                problems.push(
                    "Temperatura insuficiente para fundir cobre (punto de fusión ~1085°C)",
                );
            } else if (temperature > 1500) {
                quality = "Aceptable";
                problems.push(
                    "Temperatura excesiva puede causar evaporación de zinc en latones",
                );
            }
        }

        if (gas === "ninguno") {
            quality = "Deficiente";
            problems.push(
                "Ausencia de gas protector causará oxidación y porosidad",
            );
        } else if (gas === "CO2" && material === "aluminio") {
            quality = "Aceptable";
            problems.push(
                "CO₂ no es ideal para aluminio, preferible argón puro",
            );
        }

        setResult({
            quality,
            problems,
            reaction: material === "acero"
                ? "Fe (sólido) → Fe (líquido) a ~1538°C"
                : material === "aluminio"
                ? "Al (sólido) → Al (líquido) a ~660°C"
                : "Cu (sólido) → Cu (líquido) a ~1085°C",
        });
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400 border-b border-purple-900 pb-2">
                Simulador de Soldadura
            </h2>
            <p className="mb-8 text-gray-300 max-w-3xl">
                Ajusta los parámetros y observa cómo afectan al proceso de
                soldadura.{" "}
                <strong>Experimenta con diferentes configuraciones:</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 shadow-lg">
                        <h3 className="font-bold text-lg text-purple-300 mb-4">
                            Configuración
                        </h3>

                        <div className="space-y-5">
                            <div>
                                <label className="block font-bold text-purple-200 mb-2">
                                    Temperatura:{" "}
                                    <span className="text-purple-300">
                                        {temperature}°C
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="500"
                                    max="3500"
                                    step="50"
                                    value={temperature}
                                    onChange={(e) =>
                                        setTemperature(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                />
                                <div className="flex justify-between text-gray-400 mt-1">
                                    <span>500°C</span>
                                    <span>2000°C</span>
                                    <span>3500°C</span>
                                </div>
                            </div>

                            <div>
                                <label className="block font-bold text-purple-200 mb-2">
                                    Material:
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {([
                                        ["acero", "Acero"],
                                        ["aluminio", "Aluminio"],
                                        ["cobre", "Cobre"],
                                    ] as const).map(([value, label]) => (
                                        <button
                                            key={value}
                                            onClick={() => setMaterial(value)}
                                            className={`py-2 rounded-lg transition-all ${
                                                material === value
                                                    ? "bg-purple-700 text-white shadow-md"
                                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                            }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block font-bold text-purple-200 mb-2">
                                    Gas protector:
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {([
                                        ["CO2", "CO₂"],
                                        ["argon", "Argón"],
                                        ["mezcla", "Mezcla"],
                                        ["ninguno", "Ninguno"],
                                    ] as const).map(([value, label]) => (
                                        <button
                                            key={value}
                                            onClick={() => setGas(value)}
                                            className={`py-2 rounded-lg transition-all ${
                                                gas === value
                                                    ? "bg-purple-700 text-white shadow-md"
                                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                            }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleSimulate}
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-purple-900/50 transition-all mt-4"
                            >
                                SIMULAR SOLDADURA
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 shadow-lg">
                    <h3 className="font-bold text-lg text-purple-300 mb-4">
                        Resultados
                    </h3>

                    {result
                        ? (
                            <div
                                className={`rounded-xl p-5 border-2 ${
                                    result.quality === "Excelente"
                                        ? "bg-green-900/30 border-green-600"
                                        : result.quality === "Buena"
                                        ? "bg-blue-900/30 border-blue-600"
                                        : result.quality === "Aceptable"
                                        ? "bg-yellow-900/30 border-yellow-600"
                                        : "bg-red-900/30 border-red-600"
                                }`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-bold text-xl">
                                        Calidad: {result.quality}
                                    </h4>
                                    {result.quality === "Excelente" && (
                                        <span className="text-2xl">🎯</span>
                                    )}
                                    {result.quality === "Buena" && (
                                        <span className="text-2xl">👍</span>
                                    )}
                                    {result.quality === "Aceptable" && (
                                        <span className="text-2xl">⚠️</span>
                                    )}
                                    {result.quality === "Deficiente" && (
                                        <span className="text-2xl">❌</span>
                                    )}
                                </div>

                                <div className="bg-gray-800/50 p-3 rounded-lg mb-4">
                                    <p className="font-mono text-center text-purple-200">
                                        {result.reaction}
                                    </p>
                                </div>

                                {result.problems.length > 0
                                    ? (
                                        <div>
                                            <h5 className="font-bold text-gray-300 mb-2">
                                                Problemas detectados:
                                            </h5>
                                            <ul className="space-y-2">
                                                {result.problems.map((
                                                    problem,
                                                    i,
                                                ) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start"
                                                    >
                                                        <span className="text-red-400 mr-2">
                                                            ×
                                                        </span>
                                                        <span className="text-gray-300">
                                                            {problem}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                    : (
                                        <div className="text-center py-4">
                                            <p className="text-green-400 font-bold text-lg">
                                                ✔ Parámetros óptimos
                                            </p>
                                            <p className="text-gray-400 mt-1">
                                                La configuración actual produce
                                                soldaduras de alta calidad
                                            </p>
                                        </div>
                                    )}
                            </div>
                        )
                        : (
                            <div className="bg-gray-800/30 rounded-xl p-8 text-center border-2 border-dashed border-gray-700">
                                <p className="text-gray-400 mb-3">
                                    Ejecuta la simulación para ver los
                                    resultados
                                </p>
                                <p className="text-purple-300 text-sm">
                                    Ajusta los parámetros y haz clic en SIMULAR
                                    SOLDADURA
                                </p>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}
