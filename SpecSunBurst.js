{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "An example of a space-fulling radial layout for hierarchical data.",
  "width": 600,
  "height": 600,
  "padding": 5,
  "autosize": "none",
 
  "data": [
    {
      "name": "SunburstData",
      "values":[
        
  {
    "id": 1,
    "name": "flare"
  },
  {
    "id": 2,
    "name": "analytics",
    "parent": 1
  },
  {
    "id": 3,
    "name": "cluster",
    "parent": 2
  },
  {
    "id": 4,
    "name": "AgglomerativeCluster",
    "parent": 3,
    "size": 3938
  },
  {
    "id": 5,
    "name": "CommunityStructure",
    "parent": 3,
    "size": 3812
  },
  {
    "id": 6,
    "name": "HierarchicalCluster",
    "parent": 3,
    "size": 6714
  },
  {
    "id": 7,
    "name": "MergeEdge",
    "parent": 3,
    "size": 743
  },
  {
    "id": 8,
    "name": "graph",
    "parent": 2
  },
  {
    "id": 9,
    "name": "BetweennessCentrality",
    "parent": 8,
    "size": 3534
  },
  {
    "id": 10,
    "name": "LinkDistance",
    "parent": 8,
    "size": 5731
  },
  {
    "id": 11,
    "name": "MaxFlowMinCut",
    "parent": 8,
    "size": 7840
  },
  {
    "id": 12,
    "name": "ShortestPaths",
    "parent": 8,
    "size": 5914
  }]
      ,
      "transform": [
        {
          "type": "stratify",
          "key": "id",
          "parentKey": "parent"
        },
        {
          "type": "partition",
          "field": "size",
          "sort": {"field": "value"},
          "size": [{"signal": "2 * PI"}, {"signal": "width / 2"}],
          "as": ["a0", "r0", "a1", "r1", "depth", "children"]
        }
      ]
    }
  ],
  "signals": [
    {
      "name": "sizeFactor",
      "init": "max(0.7,min(1.3,width/400))"
    }
  ],
 
  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "SunburstData", "field": "depth"},
      "range": {"scheme": "tableau20"}
    }
  ],
 
  "marks": [
    {
      "type": "arc",
      "from": {"data": "SunburstData"},
      "encode": {
        "enter": {
          "x": {"signal": "width / 2"},
          "y": {"signal": "height / 2"},
          "fill": {"scale": "color", "field": "depth"},
          "tooltip": {"signal": "datum.name + (datum.size ? ', ' + alp_format(datum.size,'size','---WIDGET_ID_TOKEN---')  : '')"}
        },
        "update": {
          "startAngle": {"field": "a0"},
          "endAngle": {"field": "a1"},
          "innerRadius": {"field": "r0"},
          "outerRadius": {"field": "r1"},
          "stroke": {"value": "white"},
          "strokeWidth": {"value": 0.5},
          "zindex": {"value": 0}
        },
        "hover": {
          "stroke": {"value": "red"},
          "strokeWidth": {"value": 2},
          "zindex": {"value": 1}
        }
      }
    }
  ]
}

