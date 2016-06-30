/**
 *
 */

angular.module('starter.services', [])
  .factory('BftScaleDescription', function () {
    var service = {
      getDescription: getDescription
    };

    var bftScaleDescription = {  //http://planetcalc.com/384/
      0: {
        'label': 'Calm',
        'onSea': 'Sea like a mirror',
        'onLand': 'Calm. Smoke rises vertically.'
      },
      1: {
        'label': 'Light air',
        'onSea': 'Ripples with the appearance of scales are formed, but without foam crests.',
        'onLand': 'Wind motion visible in smoke.'
      },
      2: {
        'label': 'Light Breeze',
        'onSea': 'Small wavelets, still short, but more pronounced. Crests have a glassy appearance and do not break.',
        'onLand': 'Wind felt on exposed skin. Leaves rustle.'
      },
      3: {
        'label': 'Gentle Breeze',
        'onSea': 'Large wavelets. Crests begin to break. Foam of glassy appearance. Perhaps scattered white horses.',
        'onLand': 'Leaves and smaller twigs in constant motion.'
      },
      4: {
        'label': 'Moderate Breeze',
        'onSea': 'Small waves, becoming larger; fairly frequent white horses.',
        'onLand': 'Dust and loose paper raised. Small branches begin to move.'
      },
      5: {
        'label': 'Fresh Breeze',
        'onSea': 'Moderate waves, taking a more pronounced long form; many white horses are formed. Chance of some spray.',
        'onLand': 'Branches of a moderate size move. Small trees begin to sway.'
      },
      6: {
        'label': 'Strong Breeze',
        'onSea': 'Large waves begin to form; the white foam crests are more extensive everywhere. Probably some spray.',
        'onLand': 'Large branches in motion. Whistling heard in overhead wires. Umbrella use becomes difficult. Empty plastic garbage cans tip over.'
      },
      7: {
        'label': 'Near Gale',
        'onSea': 'Sea heaps up and white foam from breaking waves begins to be blown in streaks along the direction of the wind.',
        'onLand': 'Whole trees in motion. Effort needed to walk against the wind. Swaying of skyscrapers may be felt, especially by people on upper floors.'
      },
      8: {
        'label': 'Gale',
        'onSea': 'Moderately high waves of greater length; edges of crests begin to break into spindrift. The foam is blown in well-marked streaks along the direction of the wind.',
        'onLand': 'Twigs broken from trees. Cars veer on road.'
      },
      9: {
        'label': 'Severe Gale',
        'onSea': 'High waves. Dense streaks of foam along the direction of the wind. Crests of waves begin to topple, tumble and roll over. Spray may affect visibility.',
        'onLand': 'Larger branches break off trees, and some small trees blow over. Construction/temporary signs and barricades blow over. Damage to circus tents and canopies.'
      },
      10: {
        'label': 'Storm',
        'onSea': 'Very high waves with long over-hanging crests. The resulting foam, in great patches, is blown in dense white streaks along the direction of the wind. On the whole the surface of the sea takes on a white appearance. The "tumbling" of the sea becomes heavy and shock-like. Visibility affected.',
        'onLand': 'Trees are broken off or uprooted, saplings bent and deformed, poorly attached asphalt shingles and shingles in poor condition peel off roofs.'
      },
      11: {
        'label': 'Violent Storm',
        'onSea': 'Exceptionally high waves (small and medium-size ships might disappear behind the waves). The sea is completely covered with long white patches of foam flying along the direction of the wind. Everywhere the edges of the wave crests are blown into froth. Visibility affected.',
        'onLand': 'Widespread vegetation damage. More damage to most roofing surfaces, asphalt tiles that have curled up and/or fractured due to age may break away completely.'
      },
      12: {
        'label': 'Hurricane',
        'onSea': 'The air is filled with foam and spray. Sea completely white with driving spray; visibility very seriously affected.',
        'onLand': 'Considerable and widespread damage to vegetation, a few windows broken, structural damage to mobile homes and poorly constructed sheds and barns. Debris may be hurled about.'
      }
    };

    return service;

    ///////////////////////////////////////////////////////////////////////////

    function getDescription() {
      return bftScaleDescription;
    }
  })

