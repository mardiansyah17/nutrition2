// To parse this JSON data, do
//
//     final nutrition = nutritionFromJson(jsonString);

import 'dart:convert';

import 'package:nutrition/models/meta.dart';

Nutrition nutritionFromJson(String str) => Nutrition.fromJson(json.decode(str));

String nutritionToJson(Nutrition data) => json.encode(data.toJson());

class Nutrition {
  List<DataNutrition> data;
  Meta meta;

  Nutrition({
    required this.data,
    required this.meta,
  });

  factory Nutrition.fromJson(Map<String, dynamic> json) => Nutrition(
        data: List<DataNutrition>.from(
            json["data"].map((x) => DataNutrition.fromJson(x))),
        meta: Meta.fromJson(json["meta"]),
      );

  Map<String, dynamic> toJson() => {
        "data": List<dynamic>.from(data.map((x) => x.toJson())),
        "meta": meta.toJson(),
      };
}

class DataNutrition {
  int? id;
  String? code;
  String? name;
  double? energyKj;
  double? energyKcal;
  double? water;
  double? protein;
  double? fat;
  double? carbohydrate;
  double? dietaryFiber;
  double? minerals;
  double? organicAcids;
  double? alcohol;
  double? vitaminA;
  double? retinol;
  double? carotene;
  double? vitaminD;
  double? vitaminEEq;
  double? vitaminE;
  double? vitaminK;
  double? vitaminB1;
  double? vitaminB2;
  double? niacine;
  double? niacineEquiv;
  double? pantothenicAcid;
  double? vitaminB6;
  double? biotine;
  double? folicAcidEq;
  double? totalFolicAcid;
  double? freeFolicAcid;
  double? vitaminB12;
  double? vitaminC;
  double? sodium;
  double? potassium;
  double? calcium;
  double? magnesium;
  double? phosphorus;
  double? sulfur;
  double? chlorine;
  double? iron;
  double? zinc;
  double? copper;
  double? manganese;
  double? fluorine;
  double? iodine;
  double? mannitol;
  double? sorbitol;
  double? xylitol;
  double? allSugarAlcohols;
  double? glucose;
  double? fructose;
  double? galactose;
  double? monosaccharides;
  double? sucrose;
  double? maltose;
  double? lactose;
  double? disaccharides;
  double? oligosaccharidesResorbable;
  double? oligosaccharidesNonResorbable;
  double? glycogen;
  double? starch;
  double? polysaccharides;
  double? polyPentoses;
  double? polyHexoses;
  double? polyUronicAcids;
  double? cellulose;
  double? lignin;
  double? waterSolubleDietaryFiber;
  double? waterInsolubleDietaryFiber;
  double? isoleucine;
  double? leucine;
  double? lysine;
  double? methionine;
  double? cysteine;
  double? phenylalanine;
  double? tyrosine;
  double? threonine;
  double? tryptophan;
  double? valine;
  double? arginine;
  double? histidine;
  double? essentialAminoAcids;
  double? alanine;
  double? asparticAcid;
  double? glutamicAcid;
  double? glycine;
  double? proline;
  double? serine;
  double? nonEssentialAminoAcids;
  double? vegetableProtein;
  double? uricAcid;
  double? purineNitrogen;
  double? butyricAcid;
  double? capronicAcid;
  double? caprylicAcid;
  double? caprinicAcid;
  double? lauricAcid;
  double? myristicAcid;
  double? pentadecanoicAcid;
  double? palmiticAcid;
  double? margaricAcid;
  double? stearicAcid;
  double? arachidicAcid;
  double? behenicAcid;
  double? lignocericAcid;
  double? saturatedFattyAcids;
  double? tetradecenoicAcid;
  double? pentadecenoicAcid;
  double? palmitoleicAcid;
  double? heptadecenoicAcid;
  double? oleicAcid;
  double? eicosenoicAcid;
  double? erucicAcid;
  double? selacholeicAcid;
  double? monounsaturatedFattyAcids;
  double? hexadecadienoicAcid;
  double? hexadecatetraenoicAcid;
  double? linoleicAcid;
  double? linolenicAcid;
  double? stearidonicAcid;
  double? nonadecatrienoicAcid;
  double? eicosadienoicAcid;
  double? eicosatrienoicAcid;
  double? arachidonicAcid;
  double? eicosapentaenoicAcid;
  double? docosadienoicAcid;
  double? docosatrienoicAcid;
  double? docosatetraenoicAcid;
  double? docosapentaenoicAcid;
  double? docosahexaenoicAcid;
  double? polyunsaturatedFattyAcids;
  double? shortChainFattyAcids;
  double? mediumChainFattyAcids;
  double? longChainFattyAcids;
  double? glycerolAndLipoids;
  double? cholesterol;
  double? breadUnits;
  double? nacl;
  DateTime? createdAt;
  DateTime? updatedAt;

  DataNutrition({
    required this.id,
    required this.code,
    required this.name,
    required this.energyKj,
    required this.energyKcal,
    required this.water,
    required this.protein,
    required this.fat,
    required this.carbohydrate,
    required this.dietaryFiber,
    required this.minerals,
    required this.organicAcids,
    required this.alcohol,
    required this.vitaminA,
    required this.retinol,
    required this.carotene,
    required this.vitaminD,
    required this.vitaminEEq,
    required this.vitaminE,
    required this.vitaminK,
    required this.vitaminB1,
    required this.vitaminB2,
    required this.niacine,
    required this.niacineEquiv,
    required this.pantothenicAcid,
    required this.vitaminB6,
    required this.biotine,
    required this.folicAcidEq,
    required this.totalFolicAcid,
    required this.freeFolicAcid,
    required this.vitaminB12,
    required this.vitaminC,
    required this.sodium,
    required this.potassium,
    required this.calcium,
    required this.magnesium,
    required this.phosphorus,
    required this.sulfur,
    required this.chlorine,
    required this.iron,
    required this.zinc,
    required this.copper,
    required this.manganese,
    required this.fluorine,
    required this.iodine,
    required this.mannitol,
    required this.sorbitol,
    required this.xylitol,
    required this.allSugarAlcohols,
    required this.glucose,
    required this.fructose,
    required this.galactose,
    required this.monosaccharides,
    required this.sucrose,
    required this.maltose,
    required this.lactose,
    required this.disaccharides,
    required this.oligosaccharidesResorbable,
    required this.oligosaccharidesNonResorbable,
    required this.glycogen,
    required this.starch,
    required this.polysaccharides,
    required this.polyPentoses,
    required this.polyHexoses,
    required this.polyUronicAcids,
    required this.cellulose,
    required this.lignin,
    required this.waterSolubleDietaryFiber,
    required this.waterInsolubleDietaryFiber,
    required this.isoleucine,
    required this.leucine,
    required this.lysine,
    required this.methionine,
    required this.cysteine,
    required this.phenylalanine,
    required this.tyrosine,
    required this.threonine,
    required this.tryptophan,
    required this.valine,
    required this.arginine,
    required this.histidine,
    required this.essentialAminoAcids,
    required this.alanine,
    required this.asparticAcid,
    required this.glutamicAcid,
    required this.glycine,
    required this.proline,
    required this.serine,
    required this.nonEssentialAminoAcids,
    required this.vegetableProtein,
    required this.uricAcid,
    required this.purineNitrogen,
    required this.butyricAcid,
    required this.capronicAcid,
    required this.caprylicAcid,
    required this.caprinicAcid,
    required this.lauricAcid,
    required this.myristicAcid,
    required this.pentadecanoicAcid,
    required this.palmiticAcid,
    required this.margaricAcid,
    required this.stearicAcid,
    required this.arachidicAcid,
    required this.behenicAcid,
    required this.lignocericAcid,
    required this.saturatedFattyAcids,
    required this.tetradecenoicAcid,
    required this.pentadecenoicAcid,
    required this.palmitoleicAcid,
    required this.heptadecenoicAcid,
    required this.oleicAcid,
    required this.eicosenoicAcid,
    required this.erucicAcid,
    required this.selacholeicAcid,
    required this.monounsaturatedFattyAcids,
    required this.hexadecadienoicAcid,
    required this.hexadecatetraenoicAcid,
    required this.linoleicAcid,
    required this.linolenicAcid,
    required this.stearidonicAcid,
    required this.nonadecatrienoicAcid,
    required this.eicosadienoicAcid,
    required this.eicosatrienoicAcid,
    required this.arachidonicAcid,
    required this.eicosapentaenoicAcid,
    required this.docosadienoicAcid,
    required this.docosatrienoicAcid,
    required this.docosatetraenoicAcid,
    required this.docosapentaenoicAcid,
    required this.docosahexaenoicAcid,
    required this.polyunsaturatedFattyAcids,
    required this.shortChainFattyAcids,
    required this.mediumChainFattyAcids,
    required this.longChainFattyAcids,
    required this.glycerolAndLipoids,
    required this.cholesterol,
    required this.breadUnits,
    required this.nacl,
    required this.createdAt,
    required this.updatedAt,
  });

  factory DataNutrition.fromJson(Map<String, dynamic> json) => DataNutrition(
        id: json["id"],
        code: json["code"],
        name: json["name"],
        energyKj:
            json["energy_kj"] != null ? double.parse(json["energy_kj"]) : null,
        energyKcal: json["energy_kcal"] != null
            ? double.parse(json["energy_kcal"])
            : null,
        water: json["water"] != null ? double.parse(json["water"]) : null,
        protein: json["protein"] != null ? double.parse(json["protein"]) : null,
        fat: json["fat"] != null ? double.parse(json["fat"]) : null,
        carbohydrate: json["carbohydrate"] != null
            ? double.parse(json["carbohydrate"])
            : null,
        dietaryFiber: json["dietary_fiber"] != null
            ? double.parse(json["dietary_fiber"])
            : null,
        minerals:
            json["minerals"] != null ? double.parse(json["minerals"]) : null,
        organicAcids: json["organic_acids"] != null
            ? double.parse(json["organic_acids"])
            : null,
        alcohol: json["alcohol"] != null ? double.parse(json["alcohol"]) : null,
        vitaminA:
            json["vitamin_a"] != null ? double.parse(json["vitamin_a"]) : null,
        retinol: json["retinol"] != null ? double.parse(json["retinol"]) : null,
        carotene:
            json["carotene"] != null ? double.parse(json["carotene"]) : null,
        vitaminD:
            json["vitamin_d"] != null ? double.parse(json["vitamin_d"]) : null,
        vitaminEEq: json["vitamin_e_eq"] != null
            ? double.parse(json["vitamin_e_eq"])
            : null,
        vitaminE:
            json["vitamin_e"] != null ? double.parse(json["vitamin_e"]) : null,
        vitaminK:
            json["vitamin_k"] != null ? double.parse(json["vitamin_k"]) : null,
        vitaminB1: json["vitamin_b1"] != null
            ? double.parse(json["vitamin_b1"])
            : null,
        vitaminB2: json["vitamin_b2"] != null
            ? double.parse(json["vitamin_b2"])
            : null,
        niacine: json["niacine"] != null ? double.parse(json["niacine"]) : null,
        niacineEquiv: json["niacine_equiv"] != null
            ? double.parse(json["niacine_equiv"])
            : null,
        pantothenicAcid: json["pantothenic_acid"] != null
            ? double.parse(json["pantothenic_acid"])
            : null,
        vitaminB6: json["vitamin_b6"] != null
            ? double.parse(json["vitamin_b6"])
            : null,
        biotine: json["biotine"] != null ? double.parse(json["biotine"]) : null,
        folicAcidEq: json["folic_acid_eq"] != null
            ? double.parse(json["folic_acid_eq"])
            : null,
        totalFolicAcid: json["total_folic_acid"] != null
            ? double.parse(json["total_folic_acid"])
            : null,
        freeFolicAcid: json["free_folic_acid"] != null
            ? double.parse(json["free_folic_acid"])
            : null,
        vitaminB12: json["vitamin_b12"] != null
            ? double.parse(json["vitamin_b12"])
            : null,
        vitaminC:
            json["vitamin_c"] != null ? double.parse(json["vitamin_c"]) : null,
        sodium: json["sodium"] != null ? double.parse(json["sodium"]) : null,
        potassium:
            json["potassium"] != null ? double.parse(json["potassium"]) : null,
        calcium: json["calcium"] != null ? double.parse(json["calcium"]) : null,
        magnesium:
            json["magnesium"] != null ? double.parse(json["magnesium"]) : null,
        phosphorus: json["phosphorus"] != null
            ? double.parse(json["phosphorus"])
            : null,
        sulfur: json["sulfur"] != null ? double.parse(json["sulfur"]) : null,
        chlorine:
            json["chlorine"] != null ? double.parse(json["chlorine"]) : null,
        iron: json["iron"] != null ? double.parse(json["iron"]) : null,
        zinc: json["zinc"] != null ? double.parse(json["zinc"]) : null,
        copper: json["copper"] != null ? double.parse(json["copper"]) : null,
        manganese:
            json["manganese"] != null ? double.parse(json["manganese"]) : null,
        fluorine:
            json["fluorine"] != null ? double.parse(json["fluorine"]) : null,
        iodine: json["iodine"] != null ? double.parse(json["iodine"]) : null,
        mannitol:
            json["mannitol"] != null ? double.parse(json["mannitol"]) : null,
        sorbitol:
            json["sorbitol"] != null ? double.parse(json["sorbitol"]) : null,
        xylitol: json["xylitol"] != null ? double.parse(json["xylitol"]) : null,
        allSugarAlcohols: json["all_sugar_alcohols"] != null
            ? double.parse(json["all_sugar_alcohols"])
            : null,
        glucose: json["glucose"] != null ? double.parse(json["glucose"]) : null,
        fructose:
            json["fructose"] != null ? double.parse(json["fructose"]) : null,
        galactose:
            json["galactose"] != null ? double.parse(json["galactose"]) : null,
        monosaccharides: json["monosaccharides"] != null
            ? double.parse(json["monosaccharides"])
            : null,
        sucrose: json["sucrose"] != null ? double.parse(json["sucrose"]) : null,
        maltose: json["maltose"] != null ? double.parse(json["maltose"]) : null,
        lactose: json["lactose"] != null ? double.parse(json["lactose"]) : null,
        disaccharides: json["disaccharides"] != null
            ? double.parse(json["disaccharides"])
            : null,
        oligosaccharidesResorbable: json["oligosaccharides_resorbable"] != null
            ? double.parse(json["oligosaccharides_resorbable"])
            : null,
        oligosaccharidesNonResorbable:
            json["oligosaccharides_non_resorbable"] != null
                ? double.parse(json["oligosaccharides_non_resorbable"])
                : null,
        glycogen:
            json["glycogen"] != null ? double.parse(json["glycogen"]) : null,
        starch: json["starch"] != null ? double.parse(json["starch"]) : null,
        polysaccharides: json["polysaccharides"] != null
            ? double.parse(json["polysaccharides"])
            : null,
        polyPentoses: json["poly_pentoses"] != null
            ? double.parse(json["poly_pentoses"])
            : null,
        polyHexoses: json["poly_hexoses"] != null
            ? double.parse(json["poly_hexoses"])
            : null,
        polyUronicAcids: json["poly_uronic_acids"] != null
            ? double.parse(json["poly_uronic_acids"])
            : null,
        cellulose:
            json["cellulose"] != null ? double.parse(json["cellulose"]) : null,
        lignin: json["lignin"] != null ? double.parse(json["lignin"]) : null,
        waterSolubleDietaryFiber: json["water_soluble_dietary_fiber"] != null
            ? double.parse(json["water_soluble_dietary_fiber"])
            : null,
        waterInsolubleDietaryFiber:
            json["water_insoluble_dietary_fiber"] != null
                ? double.parse(json["water_insoluble_dietary_fiber"])
                : null,
        isoleucine: json["isoleucine"] != null
            ? double.parse(json["isoleucine"])
            : null,
        leucine: json["leucine"] != null ? double.parse(json["leucine"]) : null,
        lysine: json["lysine"] != null ? double.parse(json["lysine"]) : null,
        methionine: json["methionine"] != null
            ? double.parse(json["methionine"])
            : null,
        cysteine:
            json["cysteine"] != null ? double.parse(json["cysteine"]) : null,
        phenylalanine: json["phenylalanine"] != null
            ? double.parse(json["phenylalanine"])
            : null,
        tyrosine:
            json["tyrosine"] != null ? double.parse(json["tyrosine"]) : null,
        threonine:
            json["threonine"] != null ? double.parse(json["threonine"]) : null,
        tryptophan: json["tryptophan"] != null
            ? double.parse(json["tryptophan"])
            : null,
        valine: json["valine"] != null ? double.parse(json["valine"]) : null,
        arginine:
            json["arginine"] != null ? double.parse(json["arginine"]) : null,
        histidine:
            json["histidine"] != null ? double.parse(json["histidine"]) : null,
        essentialAminoAcids: json["essential_amino_acids"] != null
            ? double.parse(json["essential_amino_acids"])
            : null,
        alanine: json["alanine"] != null ? double.parse(json["alanine"]) : null,
        asparticAcid: json["aspartic_acid"] != null
            ? double.parse(json["aspartic_acid"])
            : null,
        glutamicAcid: json["glutamic_acid"] != null
            ? double.parse(json["glutamic_acid"])
            : null,
        glycine: json["glycine"] != null ? double.parse(json["glycine"]) : null,
        proline: json["proline"] != null ? double.parse(json["proline"]) : null,
        serine: json["serine"] != null ? double.parse(json["serine"]) : null,
        nonEssentialAminoAcids: json["non_essential_amino_acids"] != null
            ? double.parse(json["non_essential_amino_acids"])
            : null,
        vegetableProtein: json["vegetable_protein"] != null
            ? double.parse(json["vegetable_protein"])
            : null,
        uricAcid:
            json["uric_acid"] != null ? double.parse(json["uric_acid"]) : null,
        purineNitrogen: json["purine_nitrogen"] != null
            ? double.parse(json["purine_nitrogen"])
            : null,
        butyricAcid: json["butyric_acid"] != null
            ? double.parse(json["butyric_acid"])
            : null,
        capronicAcid: json["capronic_acid"] != null
            ? double.parse(json["capronic_acid"])
            : null,
        caprylicAcid: json["caprylic_acid"] != null
            ? double.parse(json["caprylic_acid"])
            : null,
        caprinicAcid: json["caprinic_acid"] != null
            ? double.parse(json["caprinic_acid"])
            : null,
        lauricAcid: json["lauric_acid"] != null
            ? double.parse(json["lauric_acid"])
            : null,
        myristicAcid: json["myristic_acid"] != null
            ? double.parse(json["myristic_acid"])
            : null,
        pentadecanoicAcid: json["pentadecanoic_acid"] != null
            ? double.parse(json["pentadecanoic_acid"])
            : null,
        palmiticAcid: json["palmitic_acid"] != null
            ? double.parse(json["palmitic_acid"])
            : null,
        margaricAcid: json["margaric_acid"] != null
            ? double.parse(json["margaric_acid"])
            : null,
        stearicAcid: json["stearic_acid"] != null
            ? double.parse(json["stearic_acid"])
            : null,
        arachidicAcid: json["arachidic_acid"] != null
            ? double.parse(json["arachidic_acid"])
            : null,
        behenicAcid: json["behenic_acid"] != null
            ? double.parse(json["behenic_acid"])
            : null,
        lignocericAcid: json["lignoceric_acid"] != null
            ? double.parse(json["lignoceric_acid"])
            : null,
        saturatedFattyAcids: json["saturated_fatty_acids"] != null
            ? double.parse(json["saturated_fatty_acids"])
            : null,
        tetradecenoicAcid: json["tetradecenoic_acid"] != null
            ? double.parse(json["tetradecenoic_acid"])
            : null,
        pentadecenoicAcid: json["pentadecenoic_acid"] != null
            ? double.parse(json["pentadecenoic_acid"])
            : null,
        palmitoleicAcid: json["palmitoleic_acid"] != null
            ? double.parse(json["palmitoleic_acid"])
            : null,
        heptadecenoicAcid: json["heptadecenoic_acid"] != null
            ? double.parse(json["heptadecenoic_acid"])
            : null,
        oleicAcid: json["oleic_acid"] != null
            ? double.parse(json["oleic_acid"])
            : null,
        eicosenoicAcid: json["eicosenoic_acid"] != null
            ? double.parse(json["eicosenoic_acid"])
            : null,
        erucicAcid: json["erucic_acid"] != null
            ? double.parse(json["erucic_acid"])
            : null,
        selacholeicAcid: json["selacholeic_acid"] != null
            ? double.parse(json["selacholeic_acid"])
            : null,
        monounsaturatedFattyAcids: json["monounsaturated_fatty_acids"] != null
            ? double.parse(json["monounsaturated_fatty_acids"])
            : null,
        hexadecadienoicAcid: json["hexadecadienoic_acid"] != null
            ? double.parse(json["hexadecadienoic_acid"])
            : null,
        hexadecatetraenoicAcid: json["hexadecatetraenoic_acid"] != null
            ? double.parse(json["hexadecatetraenoic_acid"])
            : null,
        linoleicAcid: json["linoleic_acid"] != null
            ? double.parse(json["linoleic_acid"])
            : null,
        linolenicAcid: json["linolenic_acid"] != null
            ? double.parse(json["linolenic_acid"])
            : null,
        stearidonicAcid: json["stearidonic_acid"] != null
            ? double.parse(json["stearidonic_acid"])
            : null,
        nonadecatrienoicAcid: json["nonadecatrienoic_acid"] != null
            ? double.parse(json["nonadecatrienoic_acid"])
            : null,
        eicosadienoicAcid: json["eicosadienoic_acid"] != null
            ? double.parse(json["eicosadienoic_acid"])
            : null,
        eicosatrienoicAcid: json["eicosatrienoic_acid"] != null
            ? double.parse(json["eicosatrienoic_acid"])
            : null,
        arachidonicAcid: json["arachidonic_acid"] != null
            ? double.parse(json["arachidonic_acid"])
            : null,
        eicosapentaenoicAcid: json["eicosapentaenoic_acid"] != null
            ? double.parse(json["eicosapentaenoic_acid"])
            : null,
        docosadienoicAcid: json["docosadienoic_acid"] != null
            ? double.parse(json["docosadienoic_acid"])
            : null,
        docosatrienoicAcid: json["docosatrienoic_acid"] != null
            ? double.parse(json["docosatrienoic_acid"])
            : null,
        docosatetraenoicAcid: json["docosatetraenoic_acid"] != null
            ? double.parse(json["docosatetraenoic_acid"])
            : null,
        docosapentaenoicAcid: json["docosapentaenoic_acid"] != null
            ? double.parse(json["docosapentaenoic_acid"])
            : null,
        docosahexaenoicAcid: json["docosahexaenoic_acid"] != null
            ? double.parse(json["docosahexaenoic_acid"])
            : null,
        polyunsaturatedFattyAcids: json["polyunsaturated_fatty_acids"] != null
            ? double.parse(json["polyunsaturated_fatty_acids"])
            : null,
        shortChainFattyAcids: json["short_chain_fatty_acids"] != null
            ? double.parse(json["short_chain_fatty_acids"])
            : null,
        mediumChainFattyAcids: json["medium_chain_fatty_acids"] != null
            ? double.parse(json["medium_chain_fatty_acids"])
            : null,
        longChainFattyAcids: json["long_chain_fatty_acids"] != null
            ? double.parse(json["long_chain_fatty_acids"])
            : null,
        glycerolAndLipoids: json["glycerol_and_lipoids"] != null
            ? double.parse(json["glycerol_and_lipoids"])
            : null,
        cholesterol: json["cholesterol"] != null
            ? double.parse(json["cholesterol"])
            : null,
        breadUnits: json["bread_units"] != null
            ? double.parse(json["bread_units"])
            : null,
        nacl: json["nacl"] != null ? double.parse(json["nacl"]) : null,
        createdAt:json["createdAt"]!=null? DateTime.parse(json["createdAt"]):null,
        updatedAt:json["updatedAt"]!=null? DateTime.parse(json["updatedAt"]):null,
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "code": code,
        "name": name,
        "energy_kj": energyKj,
        "energy_kcal": energyKcal,
        "water": water,
        "protein": protein,
        "fat": fat,
        "carbohydrate": carbohydrate,
        "dietary_fiber": dietaryFiber,
        "minerals": minerals,
        "organic_acids": organicAcids,
        "alcohol": alcohol,
        "vitamin_a": vitaminA,
        "retinol": retinol,
        "carotene": carotene,
        "vitamin_d": vitaminD,
        "vitamin_e_eq": vitaminEEq,
        "vitamin_e": vitaminE,
        "vitamin_k": vitaminK,
        "vitamin_b1": vitaminB1,
        "vitamin_b2": vitaminB2,
        "niacine": niacine,
        "niacine_equiv": niacineEquiv,
        "pantothenic_acid": pantothenicAcid,
        "vitamin_b6": vitaminB6,
        "biotine": biotine,
        "folic_acid_eq": folicAcidEq,
        "total_folic_acid": totalFolicAcid,
        "free_folic_acid": freeFolicAcid,
        "vitamin_b12": vitaminB12,
        "vitamin_c": vitaminC,
        "sodium": sodium,
        "potassium": potassium,
        "calcium": calcium,
        "magnesium": magnesium,
        "phosphorus": phosphorus,
        "sulfur": sulfur,
        "chlorine": chlorine,
        "iron": iron,
        "zinc": zinc,
        "copper": copper,
        "manganese": manganese,
        "fluorine": fluorine,
        "iodine": iodine,
        "mannitol": mannitol,
        "sorbitol": sorbitol,
        "xylitol": xylitol,
        "all_sugar_alcohols": allSugarAlcohols,
        "glucose": glucose,
        "fructose": fructose,
        "galactose": galactose,
        "monosaccharides": monosaccharides,
        "sucrose": sucrose,
        "maltose": maltose,
        "lactose": lactose,
        "disaccharides": disaccharides,
        "oligosaccharides_resorbable": oligosaccharidesResorbable,
        "oligosaccharides_non_resorbable": oligosaccharidesNonResorbable,
        "glycogen": glycogen,
        "starch": starch,
        "polysaccharides": polysaccharides,
        "poly_pentoses": polyPentoses,
        "poly_hexoses": polyHexoses,
        "poly_uronic_acids": polyUronicAcids,
        "cellulose": cellulose,
        "lignin": lignin,
        "water_soluble_dietary_fiber": waterSolubleDietaryFiber,
        "water_insoluble_dietary_fiber": waterInsolubleDietaryFiber,
        "isoleucine": isoleucine,
        "leucine": leucine,
        "lysine": lysine,
        "methionine": methionine,
        "cysteine": cysteine,
        "phenylalanine": phenylalanine,
        "tyrosine": tyrosine,
        "threonine": threonine,
        "tryptophan": tryptophan,
        "valine": valine,
        "arginine": arginine,
        "histidine": histidine,
        "essential_amino_acids": essentialAminoAcids,
        "alanine": alanine,
        "aspartic_acid": asparticAcid,
        "glutamic_acid": glutamicAcid,
        "glycine": glycine,
        "proline": proline,
        "serine": serine,
        "non_essential_amino_acids": nonEssentialAminoAcids,
        "vegetable_protein": vegetableProtein,
        "uric_acid": uricAcid,
        "purine_nitrogen": purineNitrogen,
        "butyric_acid": butyricAcid,
        "capronic_acid": capronicAcid,
        "caprylic_acid": caprylicAcid,
        "caprinic_acid": caprinicAcid,
        "lauric_acid": lauricAcid,
        "myristic_acid": myristicAcid,
        "pentadecanoic_acid": pentadecanoicAcid,
        "palmitic_acid": palmiticAcid,
        "margaric_acid": margaricAcid,
        "stearic_acid": stearicAcid,
        "arachidic_acid": arachidicAcid,
        "behenic_acid": behenicAcid,
        "lignoceric_acid": lignocericAcid,
        "saturated_fatty_acids": saturatedFattyAcids,
        "tetradecenoic_acid": tetradecenoicAcid,
        "pentadecenoic_acid": pentadecenoicAcid,
        "palmitoleic_acid": palmitoleicAcid,
        "heptadecenoic_acid": heptadecenoicAcid,
        "oleic_acid": oleicAcid,
        "eicosenoic_acid": eicosenoicAcid,
        "erucic_acid": erucicAcid,
        "selacholeic_acid": selacholeicAcid,
        "monounsaturated_fatty_acids": monounsaturatedFattyAcids,
        "hexadecadienoic_acid": hexadecadienoicAcid,
        "hexadecatetraenoic_acid": hexadecatetraenoicAcid,
        "linoleic_acid": linoleicAcid,
        "linolenic_acid": linolenicAcid,
        "stearidonic_acid": stearidonicAcid,
        "nonadecatrienoic_acid": nonadecatrienoicAcid,
        "eicosadienoic_acid": eicosadienoicAcid,
        "eicosatrienoic_acid": eicosatrienoicAcid,
        "arachidonic_acid": arachidonicAcid,
        "eicosapentaenoic_acid": eicosapentaenoicAcid,
        "docosadienoic_acid": docosadienoicAcid,
        "docosatrienoic_acid": docosatrienoicAcid,
        "docosatetraenoic_acid": docosatetraenoicAcid,
        "docosapentaenoic_acid": docosapentaenoicAcid,
        "docosahexaenoic_acid": docosahexaenoicAcid,
        "polyunsaturated_fatty_acids": polyunsaturatedFattyAcids,
        "short_chain_fatty_acids": shortChainFattyAcids,
        "medium_chain_fatty_acids": mediumChainFattyAcids,
        "long_chain_fatty_acids": longChainFattyAcids,
        "glycerol_and_lipoids": glycerolAndLipoids,
        "cholesterol": cholesterol,
        "bread_units": breadUnits,
        "nacl": nacl,
        "createdAt": createdAt?.toIso8601String(),
        "updatedAt": updatedAt?.toIso8601String(),
      };
}
