var documenterSearchIndex = {"docs":
[{"location":"guide_quickstart/#Quick-Start-Guide","page":"Quick Start","title":"Quick Start Guide","text":"","category":"section"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"First, make sure you've installed the package.","category":"page"},{"location":"guide_quickstart/#Creating-IDS-Graphs","page":"Quick Start","title":"Creating IDS Graphs","text":"","category":"section"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"The package mainly revolves around the IDSGraph struct and operations on it. This graph has \"components\" as vertices, with an edge from component A to component B if B is a subcomponent of A. If you call the no-parameter constructor, we just get an empty graph","category":"page"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"julia> using IDSGraphs\njulia> IDSGraph()","category":"page"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"However, this isn't that useful, as we'd have to construct all the relationships ourselves. IDSGraphs can also load a default graph based on data from the CHISE project. You can pass a symbol for which dataset to load.","category":"page"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"julia> IDSGraph(:ids)","category":"page"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"Check the documentation for the constructor for supported symbols. These will be downloaded the first time as an artifact.","category":"page"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"You can also construct a graph from an IDS file on disk by passing in a filename","category":"page"},{"location":"guide_quickstart/","page":"Quick Start","title":"Quick Start","text":"julia> IDSGraph(\"local/path/to/file/custom-ids.txt\")","category":"page"},{"location":"api_structures/#Character-Structures","page":"Structures","title":"Character Structures","text":"","category":"section"},{"location":"api_structures/","page":"Structures","title":"Structures","text":"IDS files use Unicode ideographic description characters to describe how components of characters are put together (they occupy the range from U+2FF0 to U+2FFB). In IDSGraphs.jl, these relationships are represented as a character structures, similar to a parse tree.","category":"page"},{"location":"api_structures/","page":"Structures","title":"Structures","text":"IDSGraphs.parse(::AbstractString)","category":"page"},{"location":"api_structures/#IDSGraphs.parse-Tuple{AbstractString}","page":"Structures","title":"IDSGraphs.parse","text":"IDSFiles.parse(::AbstractString)\n\nParse a single IDS string that describes a character/component's decomposition. (This function does not do any input validation to verify that the string can actually represent a decomposition; in this case, the method will fail.)\n\nThis is a relatively low-level method; you typically do not need to call this directly.\n\nExamples\n\nWe can take the IDS string itself and parse it as a nested structure.\n\njulia> parse(\"⿱此二\")\nCharStructure{TopBottomStructure}(TopBottomStructure(Component('此'), Component('二')))\n\n\n\n\n\n","category":"method"},{"location":"api_structures/#Structure-Hierarchy","page":"Structures","title":"Structure Hierarchy","text":"","category":"section"},{"location":"api_structures/","page":"Structures","title":"Structures","text":"AbstractCharStructure\nNestedStructure\nComponent","category":"page"},{"location":"api_structures/#IDSGraphs.Component","page":"Structures","title":"IDSGraphs.Component","text":"Leaf node of a structure tree; this contains a single component.\n\n\n\n\n\n","category":"type"},{"location":"api_structures/#Basic-Relationships","page":"Structures","title":"Basic Relationships","text":"","category":"section"},{"location":"api_structures/","page":"Structures","title":"Structures","text":"LeftRightStructure\nTopBottomStructure\nVerticalThirdsStructure\nHorizontalThirdsStructure","category":"page"},{"location":"api_structures/#Nested-Relationships","page":"Structures","title":"Nested Relationships","text":"","category":"section"},{"location":"api_structures/","page":"Structures","title":"Structures","text":"CenterNestedStructure\nBottomNestedStructure\nTopNestedStructure\nRightNestedStructure\nBottomRightNestedStructure\nBottomLeftNestedStructure\nTopRightNestedStructure","category":"page"},{"location":"api_structures/#Overlap-Relationship","page":"Structures","title":"Overlap Relationship","text":"","category":"section"},{"location":"api_structures/","page":"Structures","title":"Structures","text":"OverlapStructure","category":"page"},{"location":"api_depgraphs/#Character-Dependency-Graphs","page":"Component Dependency Graphs","title":"Character Dependency Graphs","text":"","category":"section"},{"location":"api_depgraphs/","page":"Component Dependency Graphs","title":"Component Dependency Graphs","text":"A single IDS file is converted/represented as a graph where the vertices are components and the directed edges point from larger characters to components of characters. This graph type fully implements the AbstractGraph interface specified in LightGraphs.","category":"page"},{"location":"#IDSGraphs.jl-Documentation","page":"Home","title":"IDSGraphs.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This is a convenience package for reading and processing IDS files, which represent decompositions of CJK (Chinese, Japanese, Korean) language characters. Functionality is provided for the pipeline from reading IDS files to representing them as a graph of character component dependencies.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Still in early development! APIs have yet to be finalized, more basic features will be added, tests are currently non-existent, and documentation is sparse. Development is ongoing. (This is a more generally useful part of my other project Tong.jl, which will likely not be registered as a package due to limited usefulness to others.)","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package can be installed as usual via Pkg:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ] add IDSGraphs","category":"page"},{"location":"api_internals/#Internal-Functions-and-Structs","page":"Internals","title":"Internal Functions & Structs","text":"","category":"section"},{"location":"api_internals/","page":"Internals","title":"Internals","text":"Note: any objects here are not part of the public API and are subject to change at any time. You should not rely on any of these functions remaining the same across versions.","category":"page"},{"location":"api_internals/#Structure-Parsing","page":"Internals","title":"Structure Parsing","text":"","category":"section"},{"location":"api_internals/","page":"Internals","title":"Internals","text":"An explicit stack of characters is parsed to form a tree structure of AbstractCharStructure structs. This makes it easier to process and validate.","category":"page"},{"location":"api_internals/","page":"Internals","title":"Internals","text":"parse(::Stack{Char})","category":"page"}]
}
