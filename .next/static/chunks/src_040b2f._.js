(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_040b2f._.js", {

"[project]/src/components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const fetchCategories = {
                "Footer.useEffect.fetchCategories": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch('/api/navigation');
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        console.log('Footer categories data fetched:', data);
                        // Filter out non-category links (home, about, contact)
                        const categoryLinks = data.filter({
                            "Footer.useEffect.fetchCategories.categoryLinks": (link)=>link.id !== 0 && link.id !== 998 && link.id !== 999
                        }["Footer.useEffect.fetchCategories.categoryLinks"]);
                        setCategories(categoryLinks);
                    } catch (error) {
                        console.error("Failed to fetch footer categories", error);
                        setCategories([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Footer.useEffect.fetchCategories"];
            fetchCategories();
        }
    }["Footer.useEffect"], []);
    // Split categories into two columns for better layout
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primaryOther container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-8 py-10 md:py-12",
                        dir: "rtl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3 text-center md:text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    title: "الصفحة الرئيسية - الأوروبية",
                                    className: "inline-block mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/brand.png",
                                        alt: "شعار جريدة الأوروبية",
                                        width: 140,
                                        height: 140,
                                        className: "hover:opacity-90 transition-opacity mt-10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3 text-center md:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-xl mb-4 border-b-2 border-white/20 pb-2 inline-block",
                                        children: "الأقسام"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/articles",
                                                    className: "hover:text-gray-200 transition-colors text-sm md:text-base flex items-center justify-center md:justify-start gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "كل الأخبار"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-gray-300 text-sm",
                                                children: "جاري التحميل..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this) : categories.length > 0 ? categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: category.href,
                                                        className: "hover:text-gray-200 transition-colors text-sm md:text-base flex items-center justify-center md:justify-start gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: category.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 23
                                                    }, this)
                                                }, category.id, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-gray-300 text-sm",
                                                children: "لا توجد أقسام متاحة"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3 text-center md:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-xl mb-4 border-b-2 border-white/20 pb-2 inline-block",
                                        children: "روابط مهمة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/about",
                                                    className: "hover:text-gray-200 transition-colors text-sm md:text-base flex items-center justify-center md:justify-start gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "عن الأوروبية"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/terms",
                                                    className: "hover:text-gray-200 transition-colors text-sm md:text-base flex items-center justify-center md:justify-start gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "شروط الخدمة"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/privacy",
                                                    className: "hover:text-gray-200 transition-colors text-sm md:text-base flex items-center justify-center md:justify-start gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "سياسة الخصوصية"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 text-center md:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-xl mb-4 border-b-2 border-white/20 pb-2 inline-block",
                                        children: "تابعنا"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4 justify-center md:justify-start mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all hover:scale-110",
                                                title: "فيسبوك",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/sm/Facebook.png",
                                                    alt: "فيسبوك",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all hover:scale-110",
                                                title: "تويتر",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/sm/X.png",
                                                    alt: "تويتر",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all hover:scale-110",
                                                title: "واتساب",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/sm/WhatsApp.png",
                                                    alt: "واتساب",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all hover:scale-110",
                                                title: "يوتيوب",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/sm/Youtube.png",
                                                    alt: "يوتيوب",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all hover:scale-110",
                                                title: "إنستغرام",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/sm/Instegram.png",
                                                    alt: "إنستغرام",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all hover:scale-110",
                                                title: "تيليغرام",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/sm/Telegram.png",
                                                    alt: "تيليغرام",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/20 py-4 bg-secondaryOther container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-white",
                        children: [
                            "جميع الحقوق محفوظة © ",
                            new Date().getFullYear(),
                            " الأوروبية"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Footer, "Ku/3fYTZ4p+HhLbl/Ex0fsiHh1U=");
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_refresh__.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Navigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const Navigation = ()=>{
    _s();
    const [links, setLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const fetchLinks = {
                "Navigation.useEffect.fetchLinks": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch('/api/navigation');
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        console.log('Navigation data fetched:', data);
                        setLinks(data);
                    } catch (error) {
                        console.error("Failed to fetch navigation links", error);
                        // Fallback to static links if API fails
                        const fallbackLinks = [
                            {
                                id: 0,
                                name: "Logo",
                                categorySlug: "home",
                                isActivated: true,
                                href: "/"
                            }
                        ];
                        setLinks(fallbackLinks);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Navigation.useEffect.fetchLinks"];
            fetchLinks();
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: "container mx-auto bg-primaryOther font-bold text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-wrap gap-1 mt-1 px-2 py-1",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "px-2 py-1",
                children: "جاري التحميل..."
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 54,
                columnNumber: 11
            }, this) : links.filter((link)=>link && link.href) // Filter out null/undefined links and links without href
            .map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "relative group",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "px-2 py-1 hover:bg-opacity-80 rounded transition-colors inline-block",
                        children: link.categorySlug === 'home' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/img/logo-small-right.png",
                            alt: "الرئيسية",
                            width: 20,
                            height: 8,
                            className: "h-auto m-0 p-0 block leading-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 62,
                            columnNumber: 19
                        }, this) : link.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 60,
                        columnNumber: 15
                    }, this)
                }, link.id, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_s(Navigation, "wOer6IxQl5B/+lm9E8ab96Cf2k4=");
_c = Navigation;
const __TURBOPACK__default__export__ = Navigation;
var _c;
__turbopack_refresh__.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/hijriUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Hijri to Gregorian Calendar Conversion Utilities
 * Supports both directions: Hijri to Gregorian and Gregorian to Hijri
 */ // Hijri month names in Arabic
__turbopack_esm__({
    "GREGORIAN_MONTHS_AR": (()=>GREGORIAN_MONTHS_AR),
    "GREGORIAN_MONTHS_EN_SHORT": (()=>GREGORIAN_MONTHS_EN_SHORT),
    "HIJRI_MONTHS_AR": (()=>HIJRI_MONTHS_AR),
    "HIJRI_MONTHS_EN": (()=>HIJRI_MONTHS_EN),
    "formatDateArabic": (()=>formatDateArabic),
    "formatDateEnglish": (()=>formatDateEnglish),
    "getCurrentDateFormatted": (()=>getCurrentDateFormatted),
    "getGregorianMonthNameAr": (()=>getGregorianMonthNameAr),
    "getGregorianMonthNameEnShort": (()=>getGregorianMonthNameEnShort),
    "getHijriMonthNameAr": (()=>getHijriMonthNameAr),
    "getHijriMonthNameEn": (()=>getHijriMonthNameEn),
    "gregorianMonthToHijriMonth": (()=>gregorianMonthToHijriMonth),
    "gregorianToHijri": (()=>gregorianToHijri),
    "hijriMonthToGregorianMonth": (()=>hijriMonthToGregorianMonth),
    "hijriToGregorian": (()=>hijriToGregorian)
});
const HIJRI_MONTHS_AR = [
    'محرم',
    'صفر',
    'ربيع الأول',
    'ربيع الآخر',
    'جمادى الأولى',
    'جمادى الآخرة',
    'رجب',
    'شعبان',
    'رمضان',
    'شوال',
    'ذو القعدة',
    'ذو الحجة' // Dhu al-Hijjah
];
const HIJRI_MONTHS_EN = [
    'Muharram',
    'Safar',
    'Rabi\' al-awwal',
    'Rabi\' al-thani',
    'Jumada al-awwal',
    'Jumada al-thani',
    'Rajab',
    'Sha\'ban',
    'Ramadan',
    'Shawwal',
    'Dhu al-Qi\'dah',
    'Dhu al-Hijjah'
];
const GREGORIAN_MONTHS_AR = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر' // December
];
const GREGORIAN_MONTHS_EN_SHORT = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
function gregorianToHijri(gregorianDate) {
    let year, month, day;
    if (gregorianDate instanceof Date) {
        year = gregorianDate.getFullYear();
        month = gregorianDate.getMonth() + 1; // getMonth() returns 0-11
        day = gregorianDate.getDate();
    } else {
        year = gregorianDate.year;
        month = gregorianDate.month;
        day = gregorianDate.day;
    }
    // Julian day calculation
    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 3;
    const jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1721119;
    // Convert Julian day to Hijri
    let l = jd - 1948440 + 10632;
    const n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    const j = Math.floor((10985 - l) / 5316) * Math.floor(50 * l / 17719) + Math.floor(l / 5670) * Math.floor(43 * l / 15238);
    l = l - Math.floor((30 - j) / 15) * Math.floor(17719 * j / 50) - Math.floor(j / 16) * Math.floor(15238 * j / 43) + 29;
    month = Math.floor(24 * l / 709);
    day = l - Math.floor(709 * month / 24);
    year = 30 * n + j - 30;
    return {
        year: year,
        month: month,
        day: day
    };
}
function hijriToGregorian(hijriDate) {
    const { year, month, day } = hijriDate;
    const jd = Math.floor((11 * year + 3) / 30) + 354 * year + 30 * month - Math.floor((month - 1) / 2) + day + 1948440 - 385;
    const a = jd + 32044;
    const b = Math.floor((4 * a + 3) / 146097);
    const c = a - Math.floor(146097 * b / 4);
    const d = Math.floor((4 * c + 3) / 1461);
    const e = c - Math.floor(1461 * d / 4);
    const m = Math.floor((5 * e + 2) / 153);
    const gregorianDay = e - Math.floor((153 * m + 2) / 5) + 1;
    const gregorianMonth = m + 3 - 12 * Math.floor(m / 10);
    const gregorianYear = 100 * b + d - 4800 + Math.floor(m / 10);
    return {
        year: gregorianYear,
        month: gregorianMonth,
        day: gregorianDay
    };
}
function getHijriMonthNameAr(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        throw new Error('Month number must be between 1 and 12');
    }
    return HIJRI_MONTHS_AR[monthNumber - 1];
}
function getHijriMonthNameEn(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        throw new Error('Month number must be between 1 and 12');
    }
    return HIJRI_MONTHS_EN[monthNumber - 1];
}
function getGregorianMonthNameAr(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        throw new Error('Month number must be between 1 and 12');
    }
    return GREGORIAN_MONTHS_AR[monthNumber - 1];
}
function getGregorianMonthNameEnShort(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        throw new Error('Month number must be between 1 and 12');
    }
    return GREGORIAN_MONTHS_EN_SHORT[monthNumber - 1];
}
function formatDateArabic(date, options = {}) {
    const { showHijri = true, showGregorian = true, separator = ' - ', hijriFirst = true } = options;
    const parts = [];
    if (showGregorian) {
        const gregorianDay = date.getDate();
        const gregorianMonth = date.getMonth() + 1;
        const gregorianYear = date.getFullYear();
        const gregorianStr = `${gregorianDay} ${getGregorianMonthNameAr(gregorianMonth)} ${gregorianYear}`;
        parts.push(gregorianStr);
    }
    if (showHijri) {
        const hijriDate = gregorianToHijri(date);
        const hijriStr = `${hijriDate.day} ${getHijriMonthNameAr(hijriDate.month)} ${hijriDate.year}`;
        parts.push(hijriStr);
    }
    if (hijriFirst && parts.length === 2) {
        return parts.reverse().join(separator);
    }
    return parts.join(separator);
}
function formatDateEnglish(date, options = {}) {
    const { showHijri = false, showGregorian = true, separator = ' - ', hijriFirst = false, shortMonth = true } = options;
    const parts = [];
    if (showGregorian) {
        const gregorianDay = date.getDate().toString().padStart(2, '0');
        const gregorianMonth = date.getMonth() + 1;
        const gregorianYear = date.getFullYear();
        const monthName = shortMonth ? getGregorianMonthNameEnShort(gregorianMonth) : date.toLocaleString('en-US', {
            month: 'long'
        });
        const gregorianStr = `${monthName}/${gregorianDay}/${gregorianYear}`;
        parts.push(gregorianStr);
    }
    if (showHijri) {
        const hijriDate = gregorianToHijri(date);
        const hijriStr = `${hijriDate.day} ${getHijriMonthNameEn(hijriDate.month)} ${hijriDate.year}`;
        parts.push(hijriStr);
    }
    if (hijriFirst && parts.length === 2) {
        return parts.reverse().join(separator);
    }
    return parts.join(separator);
}
function getCurrentDateFormatted(options = {}) {
    const { format = 'arabic', showHijri = true, showGregorian = true, separator = ' - ', hijriFirst = true } = options;
    const today = new Date();
    if (format === 'arabic') {
        return formatDateArabic(today, {
            showHijri,
            showGregorian,
            separator,
            hijriFirst
        });
    } else {
        return formatDateEnglish(today, {
            showHijri,
            showGregorian,
            separator,
            hijriFirst
        });
    }
}
function hijriMonthToGregorianMonth(hijriMonth, hijriYear) {
    // Create a reference Hijri date (1st day of the month)
    const hijriDate = {
        year: hijriYear,
        month: hijriMonth,
        day: 1
    };
    // Convert to Gregorian
    const gregorianDate = hijriToGregorian(hijriDate);
    return gregorianDate.month;
}
function gregorianMonthToHijriMonth(gregorianMonth, gregorianYear) {
    // Create a reference Gregorian date (1st day of the month)
    const gregorianDate = new Date(gregorianYear, gregorianMonth - 1, 1);
    // Convert to Hijri
    const hijriDate = gregorianToHijri(gregorianDate);
    return hijriDate.month;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useDateFormatting.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Custom React hooks for Hijri and Gregorian date formatting
 * Provides consistent date formatting across the application
 */ __turbopack_esm__({
    "useArabicDate": (()=>useArabicDate),
    "useArticleDate": (()=>useArticleDate),
    "useCompactDate": (()=>useCompactDate),
    "useCurrentDate": (()=>useCurrentDate),
    "useDateConversion": (()=>useDateConversion),
    "useFormattedDate": (()=>useFormattedDate),
    "useIsRamadan": (()=>useIsRamadan),
    "useMonthNames": (()=>useMonthNames),
    "useRelativeTime": (()=>useRelativeTime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/lib/hijriUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature(), _s5 = __turbopack_refresh__.signature(), _s6 = __turbopack_refresh__.signature(), _s7 = __turbopack_refresh__.signature(), _s8 = __turbopack_refresh__.signature();
;
;
function useFormattedDate(date, options = {}) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFormattedDate.useMemo": ()=>{
            if (!date) return '';
            const dateObj = typeof date === 'string' ? new Date(date) : date;
            // Validate date
            if (isNaN(dateObj.getTime()) || dateObj.getFullYear() === 1) {
                return '';
            }
            const { format = 'arabic', showHijri = true, showGregorian = true, separator = ' - ', hijriFirst = true, shortMonth = true } = options;
            if (format === 'arabic') {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateArabic"])(dateObj, {
                    showHijri,
                    showGregorian,
                    separator,
                    hijriFirst
                });
            } else {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateEnglish"])(dateObj, {
                    showHijri,
                    showGregorian,
                    separator,
                    hijriFirst,
                    shortMonth
                });
            }
        }
    }["useFormattedDate.useMemo"], [
        date,
        options
    ]);
}
_s(useFormattedDate, "nwk+m61qLgjDVUp4IGV/072DDN4=");
function useCurrentDate(options = {}) {
    _s1();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { updateInterval = 60000, ...formatOptions } = options; // Update every minute by default
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentDate.useEffect": ()=>{
            const updateDate = {
                "useCurrentDate.useEffect.updateDate": ()=>{
                    const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentDateFormatted"])(formatOptions);
                    setCurrentDate(formatted);
                }
            }["useCurrentDate.useEffect.updateDate"];
            // Initial update
            updateDate();
            // Set up interval for updates
            const interval = setInterval(updateDate, updateInterval);
            return ({
                "useCurrentDate.useEffect": ()=>clearInterval(interval)
            })["useCurrentDate.useEffect"];
        }
    }["useCurrentDate.useEffect"], [
        updateInterval,
        formatOptions
    ]);
    return currentDate;
}
_s1(useCurrentDate, "4xbDKrnm2185XSqYyYOvXjh/+GE=");
function useDateConversion(initialDate) {
    _s2();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDate || new Date());
    const hijriDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDateConversion.useMemo[hijriDate]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gregorianToHijri"])(selectedDate);
        }
    }["useDateConversion.useMemo[hijriDate]"], [
        selectedDate
    ]);
    const updateFromGregorian = (date)=>{
        setSelectedDate(date);
    };
    const updateFromHijri = (hijri)=>{
        const gregorian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hijriToGregorian"])(hijri);
        const newDate = new Date(gregorian.year, gregorian.month - 1, gregorian.day);
        setSelectedDate(newDate);
    };
    return {
        gregorianDate: selectedDate,
        hijriDate,
        updateFromGregorian,
        updateFromHijri,
        formattedArabic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateArabic"])(selectedDate),
        formattedEnglish: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateEnglish"])(selectedDate)
    };
}
_s2(useDateConversion, "zn/KoyKD6b72NoiIAMzTRNWIrqg=");
function useArticleDate(createdDate, updatedDate, options = {}) {
    _s3();
    const defaultOptions = {
        format: 'arabic',
        showHijri: false,
        showGregorian: true,
        hijriFirst: false,
        ...options
    };
    const formattedCreated = useFormattedDate(createdDate, defaultOptions);
    const formattedUpdated = useFormattedDate(updatedDate || null, defaultOptions);
    return {
        createdDate: formattedCreated,
        updatedDate: updatedDate ? formattedUpdated : null,
        hasUpdated: !!updatedDate && formattedUpdated !== formattedCreated
    };
}
_s3(useArticleDate, "IU7fepZZtnva8YlJ5d0ARy/vqTw=", false, function() {
    return [
        useFormattedDate,
        useFormattedDate
    ];
});
function useArabicDate(date, includeHijri = false) {
    _s4();
    return useFormattedDate(date, {
        format: 'arabic',
        showHijri: includeHijri,
        showGregorian: true,
        hijriFirst: includeHijri,
        separator: includeHijri ? ' هـ - ' : ''
    });
}
_s4(useArabicDate, "gh1/PD4gjMIlO+asELQM+9j03Yo=", false, function() {
    return [
        useFormattedDate
    ];
});
function useCompactDate(date, options = {}) {
    _s5();
    const { locale = 'ar', includeYear = false } = options;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCompactDate.useMemo": ()=>{
            if (!date) return '';
            const dateObj = typeof date === 'string' ? new Date(date) : date;
            if (isNaN(dateObj.getTime())) return '';
            if (locale === 'ar') {
                const day = dateObj.getDate();
                const month = dateObj.getMonth() + 1;
                const year = dateObj.getFullYear();
                const monthNameAr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGregorianMonthNameAr"])(month);
                return includeYear ? `${day} ${monthNameAr} ${year}` : `${day} ${monthNameAr}`;
            } else {
                return dateObj.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    ...includeYear && {
                        year: 'numeric'
                    }
                });
            }
        }
    }["useCompactDate.useMemo"], [
        date,
        locale,
        includeYear
    ]);
}
_s5(useCompactDate, "nwk+m61qLgjDVUp4IGV/072DDN4=");
function useMonthNames(type = 'gregorian', locale = 'ar') {
    _s6();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMonthNames.useMemo": ()=>{
            if (type === 'hijri') {
                if (locale === 'ar') {
                    return [
                        'محرم',
                        'صفر',
                        'ربيع الأول',
                        'ربيع الآخر',
                        'جمادى الأولى',
                        'جمادى الآخرة',
                        'رجب',
                        'شعبان',
                        'رمضان',
                        'شوال',
                        'ذو القعدة',
                        'ذو الحجة'
                    ];
                } else {
                    return [
                        'Muharram',
                        'Safar',
                        'Rabi\' al-awwal',
                        'Rabi\' al-thani',
                        'Jumada al-awwal',
                        'Jumada al-thani',
                        'Rajab',
                        'Sha\'ban',
                        'Ramadan',
                        'Shawwal',
                        'Dhu al-Qi\'dah',
                        'Dhu al-Hijjah'
                    ];
                }
            } else {
                if (locale === 'ar') {
                    return [
                        'يناير',
                        'فبراير',
                        'مارس',
                        'أبريل',
                        'مايو',
                        'يونيو',
                        'يوليو',
                        'أغسطس',
                        'سبتمبر',
                        'أكتوبر',
                        'نوفمبر',
                        'ديسمبر'
                    ];
                } else {
                    return [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ];
                }
            }
        }
    }["useMonthNames.useMemo"], [
        type,
        locale
    ]);
}
_s6(useMonthNames, "nwk+m61qLgjDVUp4IGV/072DDN4=");
function useIsRamadan(date) {
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useIsRamadan.useMemo": ()=>{
            const checkDate = date || new Date();
            const hijriDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$hijriUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gregorianToHijri"])(checkDate);
            return hijriDate.month === 9; // Ramadan is the 9th month in Hijri calendar
        }
    }["useIsRamadan.useMemo"], [
        date
    ]);
}
_s7(useIsRamadan, "nwk+m61qLgjDVUp4IGV/072DDN4=");
function useRelativeTime(date, locale = 'ar') {
    _s8();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useRelativeTime.useMemo": ()=>{
            if (!date) return '';
            const dateObj = typeof date === 'string' ? new Date(date) : date;
            const now = new Date();
            const diffMs = now.getTime() - dateObj.getTime();
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            const diffMinutes = Math.floor(diffMs / (1000 * 60));
            if (locale === 'ar') {
                if (diffDays > 0) {
                    return `منذ ${diffDays} ${diffDays === 1 ? 'يوم' : 'أيام'}`;
                } else if (diffHours > 0) {
                    return `منذ ${diffHours} ${diffHours === 1 ? 'ساعة' : 'ساعات'}`;
                } else if (diffMinutes > 0) {
                    return `منذ ${diffMinutes} ${diffMinutes === 1 ? 'دقيقة' : 'دقائق'}`;
                } else {
                    return 'الآن';
                }
            } else {
                if (diffDays > 0) {
                    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
                } else if (diffHours > 0) {
                    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
                } else if (diffMinutes > 0) {
                    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
                } else {
                    return 'now';
                }
            }
        }
    }["useRelativeTime.useMemo"], [
        date,
        locale
    ]);
}
_s8(useRelativeTime, "nwk+m61qLgjDVUp4IGV/072DDN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Up.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateFormatting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDateFormatting.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
function Up() {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateFormatting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentDate"])({
        format: 'arabic',
        showHijri: false,
        showGregorian: true,
        hijriFirst: false,
        separator: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Up.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Up.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start text-left md:items-start justify-center md:justify-start col-span-3 md:col-span-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        title: "الصفحة الرئيسية - الأوروبية",
                        className: "hover:opacity-90 transition-opacity mx-auto md:mx-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/brand.png",
                            alt: "شعار جريدة الأوروبية",
                            width: 140,
                            height: 140,
                            className: "max-w-full h-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Up.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Up.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Up.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex justify-center items-center"
                }, void 0, false, {
                    fileName: "[project]/src/components/Up.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                isMounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex flex-col items-end space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-medium",
                                    children: currentDate
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Up.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdTime"], {
                                    className: "text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Up.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Up.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex items-center gap-2 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:opacity-75 transition-opacity",
                                            title: "فيسبوك",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/sm/Facebook.png",
                                                alt: "فيسبوك",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Up.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Up.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Up.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:opacity-75 transition-opacity",
                                            title: "تويتر",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/sm/x.png",
                                                alt: "تويتر",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Up.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Up.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Up.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:opacity-75 transition-opacity",
                                            title: "واتساب",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/sm/WhatsApp.png",
                                                alt: "واتساب",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Up.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Up.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Up.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:opacity-75 transition-opacity",
                                            title: "يوتيوب",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/sm/Youtube.png",
                                                alt: "يوتيوب",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Up.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Up.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Up.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:opacity-75 transition-opacity",
                                            title: "إنستغرام",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/sm/Instegram.png",
                                                alt: "إنستغرام",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Up.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Up.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Up.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:opacity-75 transition-opacity",
                                            title: "تيليغرام",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/sm/Telegram.png",
                                                alt: "تيليغرام",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Up.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Up.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Up.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Up.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Up.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Up.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Up.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Up.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Up, "asVp1Ak2W7M2gQfEHclIbOW4ZkQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateFormatting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentDate"]
    ];
});
_c = Up;
const __TURBOPACK__default__export__ = Up;
var _c;
__turbopack_refresh__.register(_c, "Up");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BreakingNews.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const BreakingNews = ()=>{
    _s();
    const [breakingNews, setBreakingNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [timeRemaining, setTimeRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const expirationTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const countdownTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Function to update breaking news published status
    const updateBreakingNewsStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BreakingNews.useCallback[updateBreakingNewsStatus]": async (id, isPublished)=>{
            try {
                const response = await fetch(`/api/breaking-news/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        isPublished
                    })
                });
                if (!response.ok) {
                    console.error(`Failed to update breaking news ${id} status`);
                    return false;
                }
                console.log(`Breaking news ${id} status updated to ${isPublished}`);
                return true;
            } catch (error) {
                console.error(`Error updating breaking news ${id} status:`, error);
                return false;
            }
        }
    }["BreakingNews.useCallback[updateBreakingNewsStatus]"], []);
    // Function to format time remaining
    const formatTimeRemaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BreakingNews.useCallback[formatTimeRemaining]": (milliseconds)=>{
            const totalSeconds = Math.floor(milliseconds / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor(totalSeconds % 3600 / 60);
            const seconds = totalSeconds % 60;
            if (hours > 0) {
                return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            } else if (minutes > 0) {
                return `${minutes}:${seconds.toString().padStart(2, '0')}`;
            } else {
                return `${seconds}s`;
            }
        }
    }["BreakingNews.useCallback[formatTimeRemaining]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreakingNews.useEffect": ()=>{
            // Store refs to avoid stale closure issues
            const expirationTimers = expirationTimersRef.current;
            const countdownTimers = countdownTimersRef.current;
            // Helper function to parse TimeOnly format (HH:mm:ss) to milliseconds
            const parseTimeOnlyToMs = {
                "BreakingNews.useEffect.parseTimeOnlyToMs": (timeOnly)=>{
                    const [hours, minutes, seconds] = timeOnly.split(':').map(Number);
                    return (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
                }
            }["BreakingNews.useEffect.parseTimeOnlyToMs"];
            // Function to set up countdown timers for visual feedback
            const setupCountdownTimers = {
                "BreakingNews.useEffect.setupCountdownTimers": (newsItems)=>{
                    // Clear existing countdown timers
                    countdownTimers.forEach({
                        "BreakingNews.useEffect.setupCountdownTimers": (timer)=>clearInterval(timer)
                    }["BreakingNews.useEffect.setupCountdownTimers"]);
                    countdownTimers.clear();
                    const newTimeRemaining = new Map();
                    newsItems.forEach({
                        "BreakingNews.useEffect.setupCountdownTimers": (news)=>{
                            if (!news.isPublished) return;
                            const createdAt = new Date(news.createdAt);
                            const durationMs = parseTimeOnlyToMs(news.breakingNewsDuration);
                            const expirationTime = new Date(createdAt.getTime() + durationMs);
                            const updateCountdown = {
                                "BreakingNews.useEffect.setupCountdownTimers.updateCountdown": ()=>{
                                    const currentTime = new Date();
                                    const timeLeft = expirationTime.getTime() - currentTime.getTime();
                                    if (timeLeft <= 0) {
                                        newTimeRemaining.delete(news.id);
                                        countdownTimers.delete(news.id);
                                        return;
                                    }
                                    newTimeRemaining.set(news.id, timeLeft);
                                    setTimeRemaining(new Map(newTimeRemaining));
                                }
                            }["BreakingNews.useEffect.setupCountdownTimers.updateCountdown"];
                            // Initial update
                            updateCountdown();
                            // Set up interval for countdown updates (every second)
                            const timer = setInterval(updateCountdown, 1000);
                            countdownTimers.set(news.id, timer);
                        }
                    }["BreakingNews.useEffect.setupCountdownTimers"]);
                }
            }["BreakingNews.useEffect.setupCountdownTimers"];
            // Function to set up expiration timers for breaking news
            const setupExpirationTimers = {
                "BreakingNews.useEffect.setupExpirationTimers": (newsItems, fetchBreakingNews)=>{
                    // Clear existing timers
                    expirationTimers.forEach({
                        "BreakingNews.useEffect.setupExpirationTimers": (timer)=>clearTimeout(timer)
                    }["BreakingNews.useEffect.setupExpirationTimers"]);
                    expirationTimers.clear();
                    newsItems.forEach({
                        "BreakingNews.useEffect.setupExpirationTimers": (news)=>{
                            if (!news.isPublished) return;
                            const createdAt = new Date(news.createdAt);
                            const durationMs = parseTimeOnlyToMs(news.breakingNewsDuration);
                            const expirationTime = new Date(createdAt.getTime() + durationMs);
                            const currentTime = new Date();
                            const timeUntilExpiration = expirationTime.getTime() - currentTime.getTime();
                            console.log(`Breaking news "${news.title}" expires at:`, expirationTime);
                            console.log(`Time until expiration: ${timeUntilExpiration}ms`);
                            // If already expired, update immediately
                            if (timeUntilExpiration <= 0) {
                                console.log(`Breaking news "${news.title}" has already expired, updating status...`);
                                updateBreakingNewsStatus(news.id, false).then({
                                    "BreakingNews.useEffect.setupExpirationTimers": ()=>{
                                        // Refresh the breaking news list after update
                                        fetchBreakingNews();
                                    }
                                }["BreakingNews.useEffect.setupExpirationTimers"]);
                                return;
                            }
                            // Set timer for future expiration
                            const timer = setTimeout({
                                "BreakingNews.useEffect.setupExpirationTimers.timer": async ()=>{
                                    console.log(`Breaking news "${news.title}" duration expired, updating status...`);
                                    const success = await updateBreakingNewsStatus(news.id, false);
                                    if (success) {
                                        // Refresh the breaking news list after update
                                        fetchBreakingNews();
                                    }
                                    expirationTimers.delete(news.id);
                                }
                            }["BreakingNews.useEffect.setupExpirationTimers.timer"], timeUntilExpiration);
                            expirationTimers.set(news.id, timer);
                        }
                    }["BreakingNews.useEffect.setupExpirationTimers"]);
                }
            }["BreakingNews.useEffect.setupExpirationTimers"];
            const fetchBreakingNews = {
                "BreakingNews.useEffect.fetchBreakingNews": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch('/api/breaking-news');
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        console.log('Breaking news data fetched:', data);
                        // Filter only published breaking news
                        const publishedNews = data.filter({
                            "BreakingNews.useEffect.fetchBreakingNews.publishedNews": (news)=>news.isPublished
                        }["BreakingNews.useEffect.fetchBreakingNews.publishedNews"]);
                        setBreakingNews(publishedNews);
                        // Set up expiration timers for all breaking news (including unpublished ones)
                        setupExpirationTimers(data, fetchBreakingNews);
                        // Set up countdown timers for visual feedback
                        setupCountdownTimers(data);
                    } catch (error) {
                        console.error("Failed to fetch breaking news", error);
                        setBreakingNews([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BreakingNews.useEffect.fetchBreakingNews"];
            fetchBreakingNews();
            // Set up periodic check every 30 seconds to ensure expired news are caught
            const periodicCheck = setInterval({
                "BreakingNews.useEffect.periodicCheck": ()=>{
                    console.log('Performing periodic check for expired breaking news...');
                    fetchBreakingNews();
                }
            }["BreakingNews.useEffect.periodicCheck"], 30000); // Check every 30 seconds
            // Cleanup timers on unmount
            return ({
                "BreakingNews.useEffect": ()=>{
                    expirationTimers.forEach({
                        "BreakingNews.useEffect": (timer)=>clearTimeout(timer)
                    }["BreakingNews.useEffect"]);
                    expirationTimers.clear();
                    countdownTimers.forEach({
                        "BreakingNews.useEffect": (timer)=>clearInterval(timer)
                    }["BreakingNews.useEffect"]);
                    countdownTimers.clear();
                    clearInterval(periodicCheck);
                }
            })["BreakingNews.useEffect"];
        }
    }["BreakingNews.useEffect"], [
        updateBreakingNewsStatus
    ]);
    // Auto-rotate breaking news items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreakingNews.useEffect": ()=>{
            if (breakingNews.length > 1) {
                const interval = setInterval({
                    "BreakingNews.useEffect.interval": ()=>{
                        setCurrentIndex({
                            "BreakingNews.useEffect.interval": (prevIndex)=>prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
                        }["BreakingNews.useEffect.interval"]);
                    }
                }["BreakingNews.useEffect.interval"], 5000); // Change every 5 seconds
                return ({
                    "BreakingNews.useEffect": ()=>clearInterval(interval)
                })["BreakingNews.useEffect"];
            }
        }
    }["BreakingNews.useEffect"], [
        breakingNews.length
    ]);
    // Don't show loading state or empty state
    if (loading || !breakingNews || breakingNews.length === 0 || !isVisible) {
        return null;
    }
    const currentNews = breakingNews[currentIndex];
    const currentTimeRemaining = timeRemaining.get(currentNews?.id || 0);
    const handleClose = ()=>{
        setIsVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-b68f0a07e070c4b4" + " " + "container mx-auto bg-red-600 text-white py-2 border-b-2 border-red-700 animate-scale-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b68f0a07e070c4b4" + " " + "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b68f0a07e070c4b4" + " " + "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b68f0a07e070c4b4" + " " + "flex items-center flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-b68f0a07e070c4b4" + " " + "bg-white text-red-600 px-4 py-2 text-sm font-bold rounded-sm ml-2 flex-shrink-0",
                                    children: "أخبار عاجلة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BreakingNews.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b68f0a07e070c4b4" + " " + "flex-1 mx-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b68f0a07e070c4b4" + " " + "text-sm font-normal animate-fade-in",
                                            children: currentNews.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BreakingNews.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        currentTimeRemaining && currentTimeRemaining > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b68f0a07e070c4b4" + " " + "text-xs opacity-75 ml-2 bg-red-700 px-2 py-1 rounded",
                                            children: [
                                                "ينتهي خلال: ",
                                                formatTimeRemaining(currentTimeRemaining)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BreakingNews.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BreakingNews.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                breakingNews.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b68f0a07e070c4b4" + " " + "flex items-center ml-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b68f0a07e070c4b4" + " " + "text-xs opacity-75",
                                        children: [
                                            currentIndex + 1,
                                            " / ",
                                            breakingNews.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BreakingNews.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BreakingNews.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BreakingNews.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            title: "إغلاق الأخبار العاجلة",
                            "aria-label": "إغلاق الأخبار العاجلة",
                            className: "jsx-b68f0a07e070c4b4" + " " + "text-white hover:text-red-200 transition-colors duration-200 ml-2 p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "jsx-b68f0a07e070c4b4" + " " + "w-4 h-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12",
                                    className: "jsx-b68f0a07e070c4b4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BreakingNews.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/BreakingNews.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BreakingNews.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BreakingNews.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BreakingNews.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b68f0a07e070c4b4",
                children: "@keyframes scale-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.animate-scale-in.jsx-b68f0a07e070c4b4{animation:.3s ease-out scale-in}.animate-fade-in.jsx-b68f0a07e070c4b4{animation:1s ease-in fade-in}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BreakingNews.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
};
_s(BreakingNews, "ZkiV+z9dWl34++58GiVvVTjiGzQ=");
_c = BreakingNews;
const __TURBOPACK__default__export__ = BreakingNews;
var _c;
__turbopack_refresh__.register(_c, "BreakingNews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_040b2f._.js.map