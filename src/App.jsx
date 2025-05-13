import { useState } from 'react';
import ModelSelector from './ModelSelector';
import UploadForm from './UploadForm';
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const cropDiseasesInfo = {
    // APPLE DISEASES
    "apple_black_rot": `Black rot is a fungal disease caused by Botryosphaeria obtusa that affects all parts of apple trees including fruits, leaves, and bark. The disease appears as circular, black lesions on fruits that expand over time, eventually causing complete fruit rot and mummification. On leaves, it manifests as small purple spots that enlarge to form brown lesions with purple margins. The fungus can also infect branches, creating sunken cankers that may girdle and kill the branch.
  
  The pathogen overwinters in mummified fruits, cankers, and leaf debris. During spring rains, spores are released and dispersed by wind and water splash to initiate new infections. Black rot thrives in warm, humid conditions and is particularly severe in orchards with poor sanitation practices. Control measures include removing infected plant material, proper pruning to improve air circulation, applying appropriate fungicides, and maintaining tree vigor through proper fertilization and irrigation.`,
  
    "apple_cedar_apple_rust": `Cedar apple rust is caused by the fungus Gymnosporangium juniperi-virginianae, which requires two different host plants—apple trees and eastern red cedar or juniper—to complete its life cycle. On apple trees, the disease produces bright orange-yellow spots on leaves and fruits. As infections progress, these spots develop a red border and may cause premature defoliation if severe. Infected fruits develop distorted shapes and are often unmarketable.
  
  The disease cycle begins in spring when gelatinous orange telial horns emerge from galls on cedar trees during wet weather. These structures release spores that infect apple trees. Later in the growing season, spores produced on apple tissues infect cedar trees, completing the cycle. Control strategies include planting resistant apple varieties, removing cedar trees within a half-mile radius of orchards when possible, applying protective fungicides during the spring infection period, and maintaining tree health through proper cultural practices.`,
  
    "apple_complex": `Apple complex disease refers to situations where multiple diseases affect apple trees simultaneously, creating a complex of symptoms that can be difficult to diagnose and treat. This condition typically involves combinations of fungal, bacterial, and sometimes viral pathogens interacting with environmental stressors. The resulting symptoms may include various leaf spots, cankers, fruit rots, and overall decline in tree vigor.
  
  Managing apple complex diseases requires an integrated approach addressing all components of the disease complex. This includes proper identification of the contributing pathogens, implementation of cultural practices such as pruning for improved air circulation, removal of infected plant material, balanced fertilization to reduce stress, and application of appropriate pesticides targeted to the specific pathogens involved. Planting disease-resistant varieties and maintaining overall orchard sanitation are also critical for preventing complex disease situations.`,
  
    "apple_frog_eye_leaf_spot": `Frog eye leaf spot, caused by the fungus Botryosphaeria obtusa (the same pathogen responsible for black rot), is characterized by distinct circular lesions on apple leaves that resemble frog eyes—hence the name. These spots typically have light brown to gray centers with dark purple or reddish-brown borders. Severe infections can lead to premature leaf drop, reducing the tree's photosynthetic capacity and weakening its overall health.
  
  The pathogen overwinters in cankers, dead twigs, and mummified fruit. Spores are released during spring rains and carried by wind and water to initiate new infections. The disease is favored by warm, humid conditions and is often more severe in orchards with poor air circulation. Control measures include dormant pruning to remove infected wood, maintaining open canopies through proper pruning techniques, sanitation practices such as removing fallen leaves and fruit, and application of appropriate fungicides during the growing season.`,
  
    "apple_healthy": `Healthy apple trees display vibrant, uniform green leaves with smooth textures and no discoloration, spots, or abnormal growth patterns. Stems and branches show strong, flexible wood without cankers or visible decay. Fruits develop with consistent coloration appropriate to the variety, smooth skin free of lesions, and uniform growth patterns. Overall tree structure exhibits balanced growth with appropriate branching and fruiting patterns.
  
  Maintaining apple tree health requires integrated management including proper site selection with good drainage and air circulation, regular balanced fertilization based on soil tests, appropriate pruning to maintain open canopy structure, consistent moisture management, preventative pest and disease monitoring, and timely intervention when problems are detected. Healthy trees demonstrate greater resistance to disease pressure, produce higher quality fruit, and maintain productive lifespans often exceeding 25-30 years when properly cared for.`,
  
    "apple_powdery_mildew": `Powdery mildew in apples, caused by the fungus Podosphaera leucotricha, is characterized by a white powdery coating on leaves, shoots, and flower buds. Infected leaves often curl upward, become narrow and elongated, and may develop chlorotic (yellowing) areas. Young shoots infected with powdery mildew appear stunted and may have shortened internodes. The disease can also affect fruit, causing russeting (roughened skin) that reduces market value.
  
  Unlike many fungal pathogens, powdery mildew doesn't require free water for infection but thrives in high humidity conditions with moderate temperatures. The fungus overwinters in infected buds, which serve as primary infection sources in spring. Secondary spread occurs through airborne spores throughout the growing season. Management approaches include planting resistant varieties, pruning to remove infected shoots during dormancy, maintaining open canopy architecture, and applying appropriate fungicides preventatively, particularly during periods of rapid growth.`,
  
    "apple_rust": `Apple rust diseases, including cedar apple rust, hawthorn rust, and quince rust, are caused by Gymnosporangium species that require both apple trees and juniper/cedar hosts to complete their life cycles. On apple leaves, rust appears as bright orange or yellow spots that may have red borders. Fruit infections cause similar colored lesions that can lead to deformation and reduced quality. The leaf spots develop small, tubular structures on the undersides that produce spores.
  
  The disease cycle begins when spores from cedar/juniper galls infect apple trees in spring, followed by spores from apple trees infecting junipers in summer to form new galls. Apple rust diseases can cause significant defoliation in susceptible varieties, reducing tree vigor and fruit production. Control strategies include planting resistant apple varieties, removing alternate hosts (junipers/cedars) when possible, applying protective fungicides during the primary infection period, and maintaining tree health through proper cultural practices.`,
  
    "apple_scab": `Apple scab, caused by the fungus Venturia inaequalis, is one of the most economically important diseases of apple trees worldwide. Symptoms first appear in spring as olive-green to brown, velvety lesions on young leaves and developing fruit. As infections progress, leaf lesions may cause curling, distortion, and premature drop. On fruits, scab lesions appear as dark, corky spots that can crack as the fruit expands, allowing entry of secondary rot organisms and rendering the fruit unmarketable.
  
  The pathogen overwinters in fallen leaves, releasing ascospores during spring rains that cause primary infections. Secondary infections occur throughout the growing season as conidia are produced on infected tissues and spread by rain splash. Disease development is favored by cool, wet conditions, particularly during early season growth. Management approaches include sanitation practices such as leaf removal or destruction, planting resistant varieties, application of protectant and systemic fungicides timed according to infection periods, and utilizing disease forecasting models to optimize spray timing.`,
  
    // BEAN DISEASES
    "bean_angular_leaf_spot": `Angular leaf spot of beans is caused by the fungus Phaeoisariopsis griseola (syn. Pseudocercospora griseola) and is characterized by angular-shaped lesions on leaves that are bounded by leaf veins. Lesions typically start as small gray or brown spots that expand into angular shapes with brown centers and darker borders. During periods of high humidity, grayish-white fungal growth may be visible on the undersides of lesions. The disease can also affect pods, causing circular to elliptical red-brown lesions that may develop dark borders.
  
  The pathogen survives between growing seasons in infected plant debris and seeds. Infection is favored by moderate temperatures and extended periods of high humidity or leaf wetness. The disease is particularly problematic in tropical and subtropical bean-growing regions. Management strategies include crop rotation with non-host plants, planting certified disease-free seed, removing crop debris after harvest, maintaining proper plant spacing, applying appropriate fungicides preventatively, and utilizing resistant varieties where available.`,
  
    "bean_healthy": `Healthy bean plants display uniform green leaves with smooth textures and consistent coloration. Stems develop with appropriate thickness and strength to support the plant structure. Flowers form normally according to the specific variety's characteristics, followed by properly formed pods with smooth exteriors developing at appropriate rates. Root systems show effective nodulation from nitrogen-fixing bacteria, visible as small pink to reddish nodules.
  
  Maintaining bean plant health requires proper site selection with full sun exposure and well-draining soil, appropriate spacing to promote air circulation, regular but moderate irrigation, integrated pest management practices, and preventative disease monitoring. Healthy bean plants typically produce higher yields with better quality seeds or pods and demonstrate greater resilience to environmental challenges.`,
  
    "bean_rust": `Bean rust, caused by the fungus Uromyces appendiculatus, manifests primarily as reddish-brown pustules (uredia) on leaf surfaces, though it can also affect stems and pods. These pustules rupture the leaf epidermis and release powdery spores that can spread to other plants. Early symptoms include small yellowish-white spots that develop into the characteristic rust-colored pustules. Severe infections cause yellowing and premature leaf drop, reducing photosynthetic capacity and yield potential.
  
  The pathogen has a complex life cycle but can complete multiple generations on bean plants alone. It thrives in moderate temperatures with high humidity or prolonged leaf wetness. The fungus can produce new generations rapidly under optimal conditions, leading to explosive disease development. Control measures include crop rotation, removal of volunteer bean plants, planting resistant varieties, wider plant spacing, avoiding overhead irrigation, timing plantings to avoid high-risk periods, and applying appropriate fungicides when necessary.`,
  
    "soyabean_healthy": `Healthy soybean plants exhibit uniform deep green trifoliate leaves with proper size and shape. Stems develop with appropriate thickness and show vigorous branching patterns. Root systems are well-developed with effective nodulation from nitrogen-fixing bacteria. Plants flower uniformly and set pods consistently throughout the canopy, maintaining green leaf tissue until appropriate maturity stages.
  
  Maintaining soybean health involves selection of varieties appropriate for local conditions, proper seed treatment, optimal planting date and population, balanced soil fertility with particular attention to potassium levels, effective weed control, regular scouting for early detection of problems, and judicious use of protective treatments when necessary. Healthy soybean plants typically produce maximum yield potential with high-quality seeds containing appropriate oil and protein levels.`,
  
    // BANANA DISEASES
    "banana_cordana": `Cordana leaf spot, caused by the fungus Cordana musae, typically infects banana leaves already damaged by other diseases or environmental stressors. The disease appears as oval to elliptical spots with gray to light brown centers and dark brown margins, often surrounded by a bright yellow halo. As the disease progresses, lesions may coalesce to form large necrotic areas, reducing photosynthetic capacity and potentially affecting fruit development.
  
  The pathogen thrives in humid conditions with warm temperatures and can spread rapidly during rainy seasons. While generally considered less destructive than other banana diseases like Sigatoka, Cordana leaf spot can cause significant damage when plants are already stressed. Management focuses on addressing predisposing factors through proper plantation management including adequate drainage, appropriate plant spacing, balanced fertilization, removal of dead or severely infected leaves, and control of primary diseases that create entry points for Cordana infection.`,
  
    "banana_healthy": `Healthy banana plants display large, broad leaves with vibrant green coloration and intact leaf blades without tears or necrotic areas. The pseudostem appears robust with tight leaf sheaths forming a strong column. New leaves emerge at regular intervals, and overall plant growth is vigorous according to variety expectations and growing conditions. Fruit development proceeds normally with uniform bunch formation and proper finger development.
  
  Maintaining banana plant health requires proper site selection with good drainage and wind protection, use of disease-free planting material, adequate spacing between plants, regular balanced fertilization, consistent irrigation management, proactive sucker selection and management, regular removal of senescent leaves while preserving adequate photosynthetic surface, and implementation of integrated pest and disease management strategies. Healthy banana plants typically produce high-quality fruit with optimal bunch weight and post-harvest characteristics.`,
  
    "banana_pestalotiopsis": `Pestalotiopsis leaf spot is caused by several species of Pestalotiopsis fungi and has emerged as an increasingly significant disease in banana plantations. The disease appears as circular to elliptical spots with grayish-white centers and dark brown to black borders. Under humid conditions, small black fruiting bodies develop in concentric rings within the lesions, producing spores that appear as wet, black masses when mature. Severe infections can lead to extensive leaf necrosis, reducing photosynthetic capacity and impacting plant vigor.
  
  Pestalotiopsis fungi are often considered opportunistic pathogens that typically infect plants already stressed by environmental factors, mechanical damage, or other diseases. The pathogen thrives in warm, humid conditions common in banana-growing regions. Disease management focuses on maintaining optimal growing conditions to minimize plant stress, implementing proper spacing for adequate air circulation, avoiding leaf injuries, removing infected leaves, ensuring balanced nutrition, and applying appropriate fungicides during high-risk periods.`,
  
    "banana_sigatoka": `Sigatoka diseases of bananas include Yellow Sigatoka (caused by Mycosphaerella musicola) and the more aggressive Black Sigatoka or Black Leaf Streak (caused by Mycosphaerella fijiensis). Symptoms begin as small specks that develop into elongated streaks or spots. In Yellow Sigatoka, these lesions remain primarily yellow-brown, while in Black Sigatoka they progress through multiple stages culminating in black necrotic areas with gray centers and yellow halos. Severely affected leaves die prematurely, reducing photosynthetic capacity and resulting in reduced yield and fruit quality.
  
  The pathogens produce both asexual and sexual spores, with the latter capable of traveling long distances via wind. Disease development is favored by warm temperatures and high humidity or leaf wetness. Management requires an integrated approach including resistant varieties, proper plant spacing, field drainage, removal of infected leaf material, appropriate fertility management, and systematic fungicide application with rotation between different modes of action to prevent resistance development.`,
  
    // CITRUS DISEASES
    "citrus_black_spot": `Citrus black spot, caused by the fungus Phyllosticta citricarpa, primarily affects fruit quality through the development of various types of lesions. These include hard spot (most common) characterized by sunken lesions with gray centers and dark margins, false melanose appearing as small dark raised spots, cracked spot characterized by irregular sunken lesions, and freckle spot consisting of numerous small reddish lesions. Severe infections can cause premature fruit drop and significant economic losses.
  
  The pathogen has a complex life cycle with two spore types: asexual pycnidiospores spread through water splash, and sexual ascospores that develop in fallen leaves and disperse through air during rain events. Disease development is favored by warm temperatures with extended periods of leaf wetness. Management strategies include removal of fallen leaves, proper pruning for air circulation, applications of copper-based fungicides or other approved products, and harvesting fruit promptly when mature to minimize late-season infection development.`,
  
    "citrus_canker": `Citrus canker, caused by the bacterium Xanthomonas citri subsp. citri, is a highly contagious disease affecting all citrus varieties. The disease produces raised, corky lesions surrounded by water-soaked margins and yellow halos on leaves, stems, and fruit. As lesions age, they become tan to brown with raised margins. Severely infected leaves may drop prematurely, and affected fruit, while still edible, becomes blemished and commercially unmarketable.
  
  The bacterium enters plant tissues through natural openings (stomata) and wounds, particularly those caused by wind, thorns, insects, or human activities. It spreads through rain splash, wind-driven rain, flooding, and movement of infected plant material. The disease thrives in warm, wet conditions and can spread rapidly during tropical storms or hurricanes. Management approaches include planting resistant varieties, windbreaks to reduce wind-driven rain, copper-based bactericides applied preventatively, strict sanitation practices including decontamination of tools and equipment, and in some regions, regulatory programs to prevent introduction or limit spread.`,
  
    "citrus_greening": `Citrus greening, also known as Huanglongbing (HLB), is caused by the bacterium Candidatus Liberibacter asiaticus and is considered the most devastating disease of citrus worldwide. Infected trees develop asymmetrical blotchy mottling on leaves, along with yellowing of leaf veins and shoots. Fruits from infected trees are small, misshapen, often lopsided, and frequently remain green at the stem end. The juice becomes bitter, and seeds abort or blacken.
  
  The bacteria are primarily transmitted by the Asian citrus psyllid (Diaphorina citri), a small insect that feeds on citrus leaves. The bacteria multiply in the phloem tissue, blocking nutrient flow and gradually killing the tree over several years. There is no cure for infected trees. Management focuses on preventing infection through psyllid control using insecticides, biological control agents, and removal of infected trees to reduce inoculum sources. Research on resistant varieties, thermotherapy treatments, and other novel approaches continues, but the disease remains a major threat to global citrus production.`,
  
    "citrus_healthy": `Healthy citrus trees display uniform green leaves with glossy appearance and appropriate size for the specific variety. New growth emerges with proper color and development rate according to seasonal patterns. Branches show balanced distribution throughout the canopy without dieback or abnormal growth. Flowering occurs at appropriate times, followed by normal fruit set and development of properly shaped and colored fruit.
  
  Maintaining citrus health requires proper site selection with good drainage and protection from extreme weather, regular balanced fertilization with appropriate micronutrients (particularly zinc, manganese, and iron), consistent irrigation management, proper pruning to maintain an open canopy structure, monitoring for pest and disease issues, and timely intervention when problems are detected. Healthy citrus trees typically produce high-quality fruit with appropriate size, flavor, and juice content for the specific variety.`,
  
    // CAULIFLOWER DISEASES
    "cauliflower_bacterial_spot_rot": `Bacterial spot rot of cauliflower, caused by species of Xanthomonas and Pseudomonas bacteria, manifests as water-soaked lesions on leaves that turn dark brown to black over time. These lesions may have a yellow halo and often follow the leaf veins. When infection spreads to the developing head (curd), it causes brownish-black sunken spots that can lead to extensive rot, especially under wet conditions. The disease can significantly reduce marketable yield and quality.
  
  The bacteria survive in plant debris and can be seed-borne. They enter plants through natural openings and wounds, spreading rapidly during warm, wet weather through rain splash, irrigation water, and mechanical means. Control measures include using disease-free seed, implementing crop rotation with non-cruciferous crops for at least 2-3 years, improving air circulation through proper plant spacing, avoiding overhead irrigation, applying copper-based bactericides preventatively in high-risk situations, and promptly removing infected plant material from the field.`,
  
    "cauliflower_black_rot": `Black rot of cauliflower, caused by the bacterium Xanthomonas campestris pv. campestris, is one of the most serious diseases affecting cruciferous crops worldwide. Initial symptoms appear as V-shaped yellow to brown lesions starting from the leaf margins and progressing inward along veins. As the disease advances, affected veins turn black, and leaves may wilt and drop prematurely. If infection reaches the vascular system of the stem, it can cause blackening of the vascular tissues and systemic infection that may kill young plants or lead to stunted growth and reduced head formation in mature plants.
  
  The pathogen is primarily seed-borne but can survive in crop debris and cruciferous weeds. It spreads through infected seed, transplants, rain splash, irrigation water, insects, and contaminated equipment. The disease is favored by warm temperatures (25-30°C/77-86°F) and high humidity. Management strategies include using certified disease-free seed, hot water seed treatment, crop rotation with non-cruciferous crops for at least 2 years, weed control to eliminate alternate hosts, avoiding overhead irrigation, implementing proper sanitation practices, and applying copper-based bactericides preventatively in areas with known disease pressure.`,
  
    "cauliflower_downy_mildew": `Downy mildew of cauliflower, caused by the oomycete Hyaloperonospora parasitica, is characterized by yellow to brown irregular patches on the upper leaf surfaces with corresponding grayish-white fuzzy fungal growth on the undersides. The disease can spread to the developing head, causing discoloration and rot that renders the crop unmarketable. Seedlings are particularly vulnerable and may die if infected at an early stage.
  
  The pathogen can survive as resting spores (oospores) in soil and plant debris or on alternate hosts. It produces sporangia that are dispersed by wind and water splash during cool, wet conditions. Optimal conditions for infection include temperatures of 10-15°C (50-59°F) with high humidity or prolonged leaf wetness. Management approaches include crop rotation, removal of crop debris after harvest, improving air circulation through proper plant spacing, utilizing resistant varieties when available, avoiding overhead irrigation, and applying appropriate fungicides preventatively during high-risk periods or at the first sign of disease in the area.`,
  
    "cauliflower_healthy": `Healthy cauliflower plants display broad, robust leaves with uniform green coloration and smooth texture. The developing head (curd) forms with tight, compact florets showing proper color for the variety (typically white, but may be green, purple, or orange in specialty varieties). Plant structure is appropriately sized with strong stem development and proper leaf-to-head ratio.
  
  Maintaining cauliflower health involves proper site selection with well-draining, fertile soil; appropriate planting timing to avoid temperature extremes during head formation; adequate spacing to promote air circulation; consistent soil moisture; balanced fertilization with particular attention to boron requirements; and regular monitoring for pest and disease issues. Healthy cauliflower plants typically produce high-quality heads with proper size, density, and color characteristics for the specific variety.`,
  
    // CORN DISEASES
    "corn_blight": `Corn blight refers to several diseases including Southern corn leaf blight (caused by Bipolaris maydis) and Northern corn leaf blight (caused by Exserohilum turcicum). Southern corn leaf blight produces small, tan to brown, parallel-sided lesions on leaves, while Northern corn leaf blight causes larger, cigar-shaped gray-green to tan lesions. Both diseases can cause significant yield losses through reduction in photosynthetic area, premature death of leaves, and in severe cases, stalk rot and lodging.
  
  The pathogens survive in corn residue and can be spread by wind and rain splash. Disease development is favored by warm, humid conditions, with Southern corn leaf blight preferring temperatures of 20-32°C (68-90°F) and Northern corn leaf blight favoring slightly cooler conditions of 18-27°C (64-80°F). Management strategies include crop rotation with non-host crops, residue management through tillage or decomposition, planting resistant hybrids, proper fertility management to maintain plant vigor, and timely application of fungicides in high-value crops when disease pressure warrants treatment.`,
  
    "corn_common_rust": `Common rust of corn, caused by the fungus Puccinia sorghi, produces small, circular to elongated reddish-brown pustules on both leaf surfaces. These pustules rupture the leaf epidermis and release powdery reddish spores that can be easily rubbed off. Severe infections, especially early in the season, can cause significant leaf damage, reducing photosynthetic capacity and potentially affecting yield, particularly in sweet corn.
  
  The pathogen does not overwinter in cold climates but is reintroduced annually through wind-borne spores from southern regions. Infection is favored by cool temperatures (15-20°C/59-68°F) and high humidity or dew periods of at least 6 hours. Management approaches include planting resistant hybrids, avoiding very early or late plantings in areas with high disease pressure, maintaining balanced plant nutrition, and applying appropriate fungicides when necessary, particularly for high-value sweet corn crops.`,
  
    "corn_diseased": `Diseased corn refers to plants affected by various pathogens or disorders, exhibiting symptoms such as leaf lesions of various colors and shapes, stunted growth, wilting, premature death of plant tissues, stalk rot, ear rot, or other abnormalities. The specific symptoms depend on the particular diseases involved, which may include fungal infections such as various leaf blights and rusts, bacterial diseases, viral infections, or physiological disorders related to environmental stresses.
  
  Management of diseased corn requires accurate diagnosis of the specific problems followed by implementation of appropriate control measures. These may include crop rotation, residue management, planting resistant hybrids, optimizing planting date and plant population, ensuring proper soil fertility and drainage, employing appropriate irrigation management, and using fungicides or other pesticides when economically justified. An integrated approach addressing multiple aspects of crop production typically provides the most effective and sustainable management of corn diseases.`,
  
    "corn_gray_leaf_spot": `Gray leaf spot, caused by the fungus Cercospora zeae-maydis, is characterized by rectangular lesions that follow leaf veins, beginning as small tan spots and expanding to long, narrow, rectangular gray to tan lesions with parallel sides and blunt ends. During periods of high humidity, the fungus produces spores on the lesions, giving them a gray, fuzzy appearance. Severe infections can cause significant leaf blighting, reducing photosynthetic capacity and grain yield, particularly when the disease reaches the upper leaves during grain fill.
  
  The pathogen overwinters in corn residue on the soil surface and produces spores that are splash-dispersed or wind-blown to new plants. Disease development is favored by warm temperatures (25-30°C/77-86°F) and extended periods of high humidity or leaf wetness. Management strategies include crop rotation with non-host crops, residue management through tillage or enhanced decomposition, planting resistant hybrids, maintaining optimal plant nutrition, avoiding excessive plant density, and applying appropriate fungicides at correct timing when disease pressure and crop value justify treatment.`,
  
    "corn_healthy": `Healthy corn plants exhibit vigorous growth with robust stems and uniform dark green leaves properly positioned according to developmental stage. Tassels and ears develop at appropriate times with normal pollination and kernel formation. Root systems are well-established with proper brace root development providing adequate anchorage and nutrient uptake capacity.
  
  Maintaining corn health involves proper hybrid selection for local conditions and specific challenges, optimal planting date and soil conditions, appropriate plant population, balanced fertilization based on soil tests and yield goals, effective weed control, monitoring for pest and disease issues, and addressing environmental stresses through practices such as irrigation management. Healthy corn plants typically produce maximum yield potential with high grain quality according to genetic potential and environmental conditions.`,
  
    "corn_northern_leaf_blight": `Northern leaf blight (NLB), caused by the fungus Exserohilum turcicum, is characterized by large, cigar-shaped lesions that are grayish-green to tan in color. Lesions typically begin on lower leaves and progress upward if environmental conditions favor disease development. During periods of high humidity, the fungus produces dark-colored spores on the lesions, giving them a dusty appearance. Severe infections, particularly before and during tasseling, can significantly reduce grain yield and quality.
  
  The pathogen overwinters in corn debris and produces spores that are splash-dispersed or wind-blown to new plants in spring and early summer. Disease development is favored by moderate temperatures (18-27°C/64-80°F) with extended periods of leaf wetness or high humidity. Management strategies include crop rotation with non-host crops, residue management through tillage or enhanced decomposition, planting resistant hybrids, maintaining optimal plant nutrition, and applying appropriate fungicides at correct timing when disease pressure and crop value justify treatment.`}

  const [response, setResponse] = useState('');
  return (
    <>
    <div className="app-container">
      <section className="functionality-section fade-in">
        <h1>Disease Detection</h1>
        <ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />

        <div className="upload-result">
          <UploadForm selectedModel={selectedModel} />
          <div className="results">
            <h2>Results</h2>
            <p className="instruction-text">
              {response}
            </p>

            <div className="chatbot-text">
              <a href='http://192.168.1.125:8501/' target="_blank" rel="noopener noreferrer">
                <p>Chat with our AI assistant.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section fade-in">
        <h2>Model Details</h2>
        <p>Scroll down for detailed info about each model.</p>
        {/* You can dynamically show info based on selectedModel here */}
      </section>
      
    </div>
    </>
  );
}

export default App;
