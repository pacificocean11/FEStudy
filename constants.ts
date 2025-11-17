

import { Discipline, Subject } from './types';

export const DISCIPLINES: Discipline[] = ['Civil', 'Mechanical', 'Other'];

export const SUBJECTS_BY_DISCIPLINE: Record<Discipline, Subject[]> = {
  Civil: [
    {
      name: '1. Mathematics and Statistics',
      topics: [
        { name: 'A. Analytic geometry', subtopics: [{ name: 'A. Analytic geometry', content: null }] },
        { name: 'B. Single-variable calculus', subtopics: [{ name: 'B. Single-variable calculus', content: null }] },
        { name: 'C. Vector operations', subtopics: [{ name: 'C. Vector operations', content: null }] },
        { name: 'D. Statistics', subtopics: [{ name: 'D. Statistics', content: null }] },
      ],
    },
    {
      name: '2. Ethics and Professional Practice',
      topics: [
        { name: 'A. Codes of ethics', subtopics: [{ name: 'A. Codes of ethics', content: null }] },
        { name: 'B. Professional liability', subtopics: [{ name: 'B. Professional liability', content: null }] },
        { name: 'C. Licensure', subtopics: [{ name: 'C. Licensure', content: null }] },
        { name: 'D. Contracts and contract law', subtopics: [{ name: 'D. Contracts and contract law', content: null }] },
      ],
    },
    {
      name: '3. Engineering Economics',
      topics: [
        { name: 'A. Time value of money', subtopics: [{ name: 'A. Time value of money', content: null }] },
        { name: 'B. Cost', subtopics: [{ name: 'B. Cost', content: null }] },
        { name: 'C. Analyses', subtopics: [{ name: 'C. Analyses', content: null }] },
        { name: 'D. Uncertainty', subtopics: [{ name: 'D. Uncertainty', content: null }] },
      ],
    },
    {
      name: '4. Statics',
      topics: [
        { name: 'A. Resultants of force systems', subtopics: [{ name: 'A. Resultants of force systems', content: null }] },
        { name: 'B. Equivalent force systems', subtopics: [{ name: 'B. Equivalent force systems', content: null }] },
        { name: 'C. Equilibrium of rigid bodies', subtopics: [{ name: 'C. Equilibrium of rigid bodies', content: null }] },
        { name: 'D. Frames and trusses', subtopics: [{ name: 'D. Frames and trusses', content: null }] },
        { name: 'E. Centroid of area', subtopics: [{ name: 'E. Centroid of area', content: null }] },
        { name: 'F. Area moments of inertia', subtopics: [{ name: 'F. Area moments of inertia', content: null }] },
        { name: 'G. Static friction', subtopics: [{ name: 'G. Static friction', content: null }] },
      ],
    },
    {
      name: '5. Dynamics',
      topics: [
        { name: 'A. Kinematics', subtopics: [{ name: 'A. Kinematics', content: null }] },
        { name: 'B. Mass moments of inertia', subtopics: [{ name: 'B. Mass moments of inertia', content: null }] },
        { name: 'C. Force acceleration', subtopics: [{ name: 'C. Force acceleration', content: null }] },
        { name: 'D. Work, energy, and power', subtopics: [{ name: 'D. Work, energy, and power', content: null }] },
      ],
    },
    {
      name: '6. Mechanics of Materials',
      topics: [
        { name: 'A. Shear and moment diagrams', subtopics: [{ name: 'A. Shear and moment diagrams', content: null }] },
        { name: 'B. Stresses and strains', subtopics: [{ name: 'B. Stresses and strains', content: null }] },
        { name: 'C. Deformations', subtopics: [{ name: 'C. Deformations', content: null }] },
        { name: "D. Combined stresses, principal stresses, and Mohr's circle", subtopics: [{ name: "D. Combined stresses, principal stresses, and Mohr's circle", content: null }] },
      ],
    },
    {
      name: '7. Materials',
      topics: [
        { name: 'A. Mix design of concrete and asphalt', subtopics: [{ name: 'A. Mix design of concrete and asphalt', content: null }] },
        { name: 'B. Test methods and specifications of metals, concrete, aggregates, asphalt, and wood', subtopics: [{ name: 'B. Test methods and specifications of metals, concrete, aggregates, asphalt, and wood', content: null }] },
        { name: 'C. Physical and mechanical properties of metals, concrete, aggregates, asphalt, and wood', subtopics: [{ name: 'C. Physical and mechanical properties of metals, concrete, aggregates, asphalt, and wood', content: null }] },
      ],
    },
    {
      name: '8. Fluid Mechanics',
      topics: [
        { name: 'A. Flow measurement', subtopics: [{ name: 'A. Flow measurement', content: null }] },
        { name: 'B. Fluid properties', subtopics: [{ name: 'B. Fluid properties', content: null }] },
        { name: 'C. Fluid statics', subtopics: [{ name: 'C. Fluid statics', content: null }] },
        { name: 'D. Energy, impulse, and momentum of fluids', subtopics: [{ name: 'D. Energy, impulse, and momentum of fluids', content: null }] },
      ],
    },
    {
      name: '9. Surveying',
      topics: [
        { name: 'A. Angles, distances, and trigonometry', subtopics: [{ name: 'A. Angles, distances, and trigonometry', content: null }] },
        { name: 'B. Area computations', subtopics: [{ name: 'B. Area computations', content: null }] },
        { name: 'C. Earthwork and volume computations', subtopics: [{ name: 'C. Earthwork and volume computations', content: null }] },
        { name: 'D. Coordinate systems', subtopics: [{ name: 'D. Coordinate systems', content: null }] },
        { name: 'E. Leveling', subtopics: [{ name: 'E. Leveling', content: null }] },
      ],
    },
    {
      name: '10. Water Resources and Environmental Engineering',
      topics: [
        { name: 'A. Basic hydrology', subtopics: [{ name: 'A. Basic hydrology', content: null }] },
        { name: 'B. Basic hydraulics', subtopics: [{ name: 'B. Basic hydraulics', content: null }] },
        { name: 'C. Pumps', subtopics: [{ name: 'C. Pumps', content: null }] },
        { name: 'D. Water distribution systems', subtopics: [{ name: 'D. Water distribution systems', content: null }] },
        { name: 'E. Flood control', subtopics: [{ name: 'E. Flood control', content: null }] },
        { name: 'F. Stormwater', subtopics: [{ name: 'F. Stormwater', content: null }] },
        { name: 'G. Collection systems', subtopics: [{ name: 'G. Collection systems', content: null }] },
        { name: 'H. Groundwater', subtopics: [{ name: 'H. Groundwater', content: null }] },
        { name: 'I. Water quality', subtopics: [{ name: 'I. Water quality', content: null }] },
        { name: 'J. Testing and standards', subtopics: [{ name: 'J. Testing and standards', content: null }] },
        { name: 'K. Water and wastewater treatment', subtopics: [{ name: 'K. Water and wastewater treatment', content: null }] },
      ],
    },
    {
      name: '11. Structural Engineering',
      topics: [
        { name: 'A. Analysis of statically determinant beams, columns, trusses, and frames', subtopics: [{ name: 'A. Analysis of statically determinant beams, columns, trusses, and frames', content: null }] },
        { name: 'B. Deflection of statically determinant beams, trusses, and frames', subtopics: [{ name: 'B. Deflection of statically determinant beams, trusses, and frames', content: null }] },
        { name: 'C. Column analysis', subtopics: [{ name: 'C. Column analysis', content: null }] },
        { name: 'D. Structural determinacy and stability analysis of beams, trusses, and frames', subtopics: [{ name: 'D. Structural determinacy and stability analysis of beams, trusses, and frames', content: null }] },
        { name: 'E. Elementary statically indeterminate structures', subtopics: [{ name: 'E. Elementary statically indeterminate structures', content: null }] },
        { name: 'F. Loads, load combinations, and load paths', subtopics: [{ name: 'F. Loads, load combinations, and load paths', content: null }] },
        { name: 'G. Design of steel components', subtopics: [{ name: 'G. Design of steel components', content: null }] },
        { name: 'H. Design of reinforced concrete components', subtopics: [{ name: 'H. Design of reinforced concrete components', content: null }] },
      ],
    },
    {
      name: '12. Geotechnical Engineering',
      topics: [
        { name: 'A. Index properties and soil classifications', subtopics: [{ name: 'A. Index properties and soil classifications', content: null }] },
        { name: 'B. Phase relations', subtopics: [{ name: 'B. Phase relations', content: null }] },
        { name: 'C. Laboratory and field tests', subtopics: [{ name: 'C. Laboratory and field tests', content: null }] },
        { name: 'D. Effective stress', subtopics: [{ name: 'D. Effective stress', content: null }] },
        { name: 'E. Stability of retaining structures', subtopics: [{ name: 'E. Stability of retaining structures', content: null }] },
        { name: 'F. Shear strength', subtopics: [{ name: 'F. Shear strength', content: null }] },
        { name: 'G. Bearing capacity', subtopics: [{ name: 'G. Bearing capacity', content: null }] },
        { name: 'H. Foundation types', subtopics: [{ name: 'H. Foundation types', content: null }] },
        { name: 'I. Consolidation and differential settlement', subtopics: [{ name: 'I. Consolidation and differential settlement', content: null }] },
        { name: 'J. Slope stability', subtopics: [{ name: 'J. Slope stability', content: null }] },
        { name: 'K. Soil stabilization', subtopics: [{ name: 'K. Soil stabilization', content: null }] },
      ],
    },
    {
      name: '13. Transportation Engineering',
      topics: [
        { name: 'A. Geometric design', subtopics: [{ name: 'A. Geometric design', content: null }] },
        { name: 'B. Pavement system design', subtopics: [{ name: 'B. Pavement system design', content: null }] },
        { name: 'C. Traffic capacity and flow theory', subtopics: [{ name: 'C. Traffic capacity and flow theory', content: null }] },
        { name: 'D. Traffic control devices', subtopics: [{ name: 'D. Traffic control devices', content: null }] },
        { name: 'E. Transportation planning', subtopics: [{ name: 'E. Transportation planning', content: null }] },
      ],
    },
    {
      name: '14. Construction Engineering',
      topics: [
        { name: 'A. Project administration', subtopics: [{ name: 'A. Project administration', content: null }] },
        { name: 'B. Construction operations and methods', subtopics: [{ name: 'B. Construction operations and methods', content: null }] },
        { name: 'C. Project controls', subtopics: [{ name: 'C. Project controls', content: null }] },
        { name: 'D. Construction estimating', subtopics: [{ name: 'D. Construction estimating', content: null }] },
        { name: 'E. Interpretation of engineering drawings', subtopics: [{ name: 'E. Interpretation of engineering drawings', content: null }] },
      ],
    },
  ],
  Mechanical: [
    {
      name: '1. Mathematics',
      topics: [
        { name: 'Analytic Geometry', subtopics: [
            { name: 'Straight Lines', content: null },
            { name: 'Conics', content: null },
            { name: 'Circles', content: null },
            { name: 'Ellipse', content: null },
            { name: 'Parabola', content: null },
            { name: 'Hyperbola', content: null }
          ] 
        },
        { 
          name: 'Calculus', 
          subtopics: [
            { name: 'Limits', content: null }, 
            { name: 'Derivative', content: null }, 
            { name: 'Application of Derivatives', content: null }, 
            { name: 'Partial Derivatives', content: null }, 
            { name: 'Indefinite Integrals', content: null },
          ] 
        },
        { 
          name: 'Differential Equations', 
          subtopics: [
            { name: 'General Terminology', content: null }, 
            { name: 'First Order DE', content: null }, 
            { name: 'Higher Order DE', content: null }, 
            { name: 'Laplace Transform', content: null },
          ] 
        },
        { 
          name: 'Linear Algebra', 
          subtopics: [
            { name: 'Determinant of a Matrix', content: null }, 
            { name: 'Matrix Operations', content: null }, 
            { name: 'Unit Vector', content: null }, 
            { name: 'Dot and Cross Products', content: null }, 
            { name: 'Gradient, Divergence and Curl', content: null },
          ] 
        },
        { 
          name: 'Numerical Methods', 
          subtopics: [
            { name: "Newton’s Method of Root Extraction", content: null }, 
            { name: "Newton’s Method of Minimization", content: null }, 
            { name: "Forward Rectangle Rule", content: null }, 
            { name: "Trapezoidal Rule", content: null }, 
            { name: "Simpson’s Rule", content: null }, 
            { name: "Taylor’s and McLaurin’s Series", content: null },
          ]
        },
        { 
          name: 'Algorithm and Logic Development', 
          subtopics: [
            { name: 'Flowchart', content: null }, 
            { name: 'Pseudocode', content: null },
          ]
        },
      ],
    },
    {
      name: '2. Probability and Statistics',
      topics: [
        { name: 'A. Probability distributions', subtopics: [
            { name: 'PDF and CDF', content: null },
            { name: 'Binomial Distribution', content: null },
            { name: 'Normal Distribution', content: null },
            { name: 't-distribution', content: null },
          ] 
        },
        { 
          name: 'B. Measures of central tendencies and dispersions', 
          subtopics: [
            { name: 'Mean, Median Mode', content: null },
            { name: 'Standard Deviation and Variance', content: null },
            { name: 'Null Hypothesis', content: null },
            { name: 'Confidence Intervals', content: null },
          ] 
        },
        { name: 'C. Expected value (weighted average) in decision making', subtopics: [{ name: 'C. Expected value (weighted average) in decision making', content: null }] },
        { 
          name: 'D. Regression (linear, multiple), curve fitting, and goodness of fit', 
          subtopics: [
            { name: 'Linear Regression', content: null },
            { name: 'Correlation Coefficient', content: null }
          ] 
        },
      ],
    },
    {
      name: '3. Ethics and Professional Practice',
      topics: [
        { 
          name: 'A. Codes of ethics', 
          subtopics: [
            { name: 'NCEES Model Law', content: null },
            { name: 'Professional and Technical Societies', content: null },
            { name: 'Ethical and Legal Considerations', content: null }
          ] 
        },
        { name: 'B. Public health, safety, and welfare', subtopics: [{ name: 'B. Public health, safety, and welfare', content: null }] },
        {
          name: 'C. Intellectual property',
          subtopics: [
            { name: 'Patents', content: null },
            { name: 'Copyrights', content: null },
            { name: 'Trademarks', content: null },
            { name: 'Trade Secrets', content: null },
          ]
        },
        { 
          name: 'D. Societal considerations', 
          subtopics: [
            { name: 'Life Cycle Assessment (LCA)', content: null },
            { name: 'Sustainability', content: null }
          ]
        },
      ],
    },
    {
      name: '4. Engineering Economics',
      topics: [
        { 
          name: 'A. Time value of money', 
          subtopics: [
            { name: 'Equivalence', content: null },
            { name: 'Present Worth', content: null },
            { name: 'Equivalent Annual Worth', content: null },
            { name: 'Future Worth', content: null },
            { name: 'Rate of Return', content: null },
            { name: 'Annuities', content: null }
          ] 
        },
        { 
          name: 'B. Cost types and breakdowns', 
          subtopics: [
            { name: 'Fixed and Variable Costs', content: null },
            { name: 'Incremental Costs', content: null },
            { name: 'Average Costs', content: null },
            { name: 'Sunk Costs', content: null }
          ] 
        },
        { 
          name: 'C. Economic analyses', 
          subtopics: [
            { name: 'Cost-Benefit Analysis', content: null },
            { name: 'Break-Even Analysis', content: null },
            { name: 'Minimum Cost Analysis', content: null },
            { name: 'Overhead Analysis', content: null },
            { name: 'Life Cycle Analysis', content: null }
          ] 
        },
      ],
    },
    {
      name: '5. Electricity and Magnetism',
      topics: [
        {
          name: 'A. Electrical fundamentals',
          subtopics: [
            { name: 'Charge', content: null },
            { name: 'Current', content: null },
            { name: 'Voltage', content: null },
            { name: 'Resistance', content: null },
            { name: 'Power', content: null },
            { name: 'Energy', content: null },
            { name: 'Magnetic Flux', content: null },
          ]
        },
        { 
          name: 'B. DC circuit analysis', 
          subtopics: [
            { name: "Ohm's Law", content: null },
            { name: "Kirchhoff's Laws", content: null },
            { name: 'Series Circuits', content: null },
            { name: 'Parallel Circuits', content: null }
          ] 
        },
        { 
          name: 'C. AC circuit analysis', 
          subtopics: [
            { name: 'Frequency and Period of AC Waveform', content: null },
            { name: 'Average Value', content: null },
            { name: 'RMS Value', content: null },
            { name: 'AC Impedance', content: null },
            { name: 'Phasors of Pure RLC Circuits', content: null },
            { name: 'Admittance, Conductance and Susceptance', content: null },
          ] 
        },
        { 
          name: 'D. Motors and generators', 
          subtopics: [
            { name: 'Efficiency, Losses and Power in Rotating Machines', content: null },
            { name: 'AC Machines', content: null },
            { name: 'DC Machines', content: null },
            { name: 'Servomotors and Generators', content: null },
          ] 
        },
      ],
    },
    {
      name: '6. Statics',
      topics: [
        { 
          name: 'A. Resultants of force systems', 
          subtopics: [
            { name: 'Vector Addition', content: null },
            { name: 'Moment of a Force', content: null },
            { name: 'Couples', content: null }
          ] 
        },
        { 
          name: 'B. Concurrent force systems', 
          subtopics: [
            { name: 'Equilibrium of a Particle', content: null }
          ] 
        },
        { 
          name: 'C. Equilibrium of rigid bodies', 
          subtopics: [
            { name: 'Free Body Diagrams', content: null },
            { name: 'Equations of Equilibrium', content: null },
            { name: 'Two- and Three-Force Members', content: null }
          ] 
        },
        {
          name: 'D. Frames and Trusses',
          subtopics: [
            { name: 'Method of Joints', content: null },
            { name: 'Method of Section', content: null },
            { name: 'Zero Force Members', content: null }
          ]
        },
        {
          name: 'E. Centroids and Moments of Inertia',
          subtopics: [
            { name: 'Centroid of Masses, Areas, Lengths and Volumes', content: null },
            { name: 'Area Moment of Inertia', content: null },
            { name: 'Polar Moment of Inertia', content: null },
            { name: 'Perpendicular Axis Theorem', content: null },
            { name: 'Parallel Axis Theorem (Statics)', content: null },
            { name: 'Radius of Gyration', content: null },
            { name: 'Product of Inertia', content: null }
          ]
        },
        { 
          name: 'F. Static friction', 
          subtopics: [
            { name: 'Dry Friction', content: null },
            { name: 'Wedges', content: null },
            { name: 'Screws', content: null }
          ]
        },
      ],
    },
    {
      name: '7. Dynamics, Kinematics, and Vibrations',
      topics: [
        {
          name: 'A. Kinematics of particles',
          subtopics: [
            { name: 'Instantaneous Velocity and Acceleration', content: null },
            { name: 'Tangential and Normal Component of Acceleration', content: null },
            { name: 'Constant Acceleration Motion', content: null },
            { name: 'Variable Acceleration Motion', content: null },
            { name: 'Relative Motion', content: null },
            { name: 'Uniform Circular Motion', content: null },
            { name: 'Projectile Motion', content: null },
          ]
        },
        { name: 'B. Kinetic friction', subtopics: [{ name: 'B. Kinetic friction', content: null }] },
        { name: 'C. Newton’s second law for particles', subtopics: [{ name: 'C. Newton’s second law for particles', content: null }] },
        {
          name: 'D. Work-energy of particles',
          subtopics: [
            { name: 'Kinetic Energy', content: null },
            { name: 'Potential Energy', content: null },
            { name: 'Work', content: null },
            { name: 'Power and Efficiency', content: null },
            { name: 'Law of Conservation of Energy', content: null },
          ]
        },
        {
          name: 'E. Impulse-momentum of Particles',
          subtopics: [
            { name: 'Linear and Angular Momentum', content: null },
            { name: 'Impulse-Momentum Equation', content: null },
            { name: 'Impact', content: null }
          ]
        },
        {
          name: 'F. Kinematics of Rigid Bodies',
          subtopics: [
            { name: 'Rotation of Rigid Body under Constant Acceleration', content: null },
            { name: 'Rotation of Rigid Body under Variable Acceleration', content: null },
            { name: 'Instantaneous Center of Rotation', content: null },
            { name: 'Kennedy’s Rule', content: null }
          ]
        },
        { name: 'G. Kinematics of mechanisms', subtopics: [{ name: 'G. Kinematics of mechanisms', content: null }] },
        {
          name: 'H. Newton’s Second Law for Rigid Bodies',
          subtopics: [
            { name: 'One-Dimensional Motion of a Rigid Body', content: null },
            { name: 'Moment of Inertia of a Point Mass', content: null },
            { name: 'Mass Moment of Inertia of a Rigid Body', content: null },
            { name: 'Mass Radius of Gyration', content: null },
            { name: 'Parallel Axes Theorem- Dynamics', content: null }
          ]
        },
        {
          name: 'I. Work-energy of rigid bodies',
          subtopics: [
            { name: 'Kinetic Energy of a Rigid Body', content: null }
          ]
        },
        {
          name: 'J. Impulse-momentum of rigid bodies',
          subtopics: [
            { name: 'Principle of Angular Impulse and Momentum', content: null }
          ]
        },
        {
          name: 'K. Free and forced vibrations',
          subtopics: [
            { name: 'Free Vibrations', content: null },
            { name: 'Torsional Vibrations', content: null },
            { name: 'Forced Vibrations', content: null },
          ]
        },
      ],
    },
    {
      name: '8. Mechanics of Materials',
      topics: [
        { name: 'A. Shear and moment diagrams', subtopics: [{ name: 'A. Shear and moment diagrams', content: null }] },
        {
          name: 'B. Stress transformations and Mohr\'s circle',
          subtopics: [
            { name: 'Principal Stresses', content: null },
            { name: 'Mohr\'s Circle', content: null }
          ]
        },
        { name: 'C. Stress and strain caused by axial loads', subtopics: [{ name: 'C. Stress and strain caused by axial loads', content: null }] },
        { name: 'D. Stress and strain caused by bending loads', subtopics: [{ name: 'D. Stress and strain caused by bending loads', content: null }] },
        { name: 'E. Stress and strain caused by torsional loads', subtopics: [{ name: 'E. Stress and strain caused by torsional loads', content: null }] },
        { name: 'F. Stress and strain caused by shear', subtopics: [{ name: 'F. Stress and strain caused by shear', content: null }] },
        { name: 'G. Stress and strain caused by temperature changes', subtopics: [{ name: 'G. Stress and strain caused by temperature changes', content: null }] },
        { name: 'H. Combined loading', subtopics: [{ name: 'H. Combined loading', content: null }] },
        { name: 'I. Deformations', subtopics: [{ name: 'I. Deformations', content: null }] },
        { name: 'J. Column buckling', subtopics: [{ name: 'J. Column buckling', content: null }] },
        { name: 'K. Statically indeterminate systems', subtopics: [{ name: 'K. Statically indeterminate systems', content: null }] },
      ],
    },
    {
      name: '9. Material Properties and Processing',
      topics: [
        {
          name: 'A. Properties',
          subtopics: [
            { name: 'Mechanical Properties of Materials', content: null },
            { name: 'Electrical Properties of Materials', content: null },
            { name: 'Thermal Properties of Materials', content: null },
            { name: 'Physical Properties of Materials', content: null },
            { name: 'Chemical Properties of Materials', content: null }
          ]
        },
        { 
          name: 'B. Stress-strain diagrams', 
          subtopics: [
            { name: 'Stress-Strain Diagrams', content: null },
            { name: 'True vs. Engineering Stress-Strain Diagram', content: null }
          ] 
        },
        { name: 'C. Ferrous metals', subtopics: [{ name: 'C. Ferrous metals', content: null }] },
        { name: 'D. Nonferrous metals', subtopics: [{ name: 'D. Nonferrous metals', content: null }] },
        {
          name: 'E. Engineered materials',
          subtopics: [
            { name: 'Composites', content: null },
            { name: 'Polymers', content: null },
          ]
        },
        {
          name: 'F. Manufacturing processes',
          subtopics: [
            { name: 'Hot Processes', content: null },
            { name: 'Cold Processes', content: null },
            { name: 'Powder Metallurgy', content: null },
            { name: 'CNC', content: null },
            { name: 'Non-Traditional Machining Processes', content: null },
          ]
        },
        {
          name: 'G. Phase Diagrams, Phase transformation, and Heat Treating',
          subtopics: [
            { name: 'Phase Diagrams', content: null },
            { name: 'Critical point', content: null },
            { name: 'Triple Point', content: null },
            { name: 'Iron-Iron Carbide Phase Diagram', content: null },
            { name: 'Important Points in Iron-Iron Carbide Diagram', content: null },
            { name: 'Allotropes of iron', content: null },
            { name: 'Lever Rule', content: null },
            { name: 'Heat Treatment', content: null }
          ]
        },
        { name: 'H. Materials selection', subtopics: [{ name: 'H. Materials selection', content: null }] },
        { name: 'I. Corrosion mechanisms and control', subtopics: [{ name: 'I. Corrosion mechanisms and control', content: null }] },
        {
          name: 'J. Failure mechanisms',
          subtopics: [
            { name: 'Thermal Failure', content: null },
            { name: 'Fatigue', content: null },
            { name: 'Fracture', content: null },
            { name: 'Creep', content: null },
          ]
        },
      ],
    },
    {
      name: '10. Fluid Mechanics',
      topics: [
        { 
          name: 'A. Fluid properties', 
          subtopics: [
            { name: 'Common Fluid Properties', content: null },
            { name: 'Stress, Pressure and Viscosity', content: null },
            { name: 'Surface Tension and Capillarity', content: null },
          ] 
        },
        {
          name: 'B. Fluid statics',
          subtopics: [
            { name: 'Pressure in Static Liquid', content: null },
            { name: 'Manometers', content: null },
            { name: 'Hydrostatic Forces on Submerged Surfaces', content: null },
            { name: 'Archimedes Principle and Buoyancy', content: null },
          ]
        },
        { name: 'C. Energy, impulse, and momentum', subtopics: [{ name: 'C. Energy, impulse, and momentum', content: null }] },
        { 
          name: 'D. Internal flow', 
          subtopics: [
            { name: 'Reynold’s Number', content: null },
            { name: 'Head Loss due to Flow', content: null },
            { name: 'Minor Losses', content: null },
            { name: 'Non-Circular Ducts', content: null },
          ] 
        },
        { name: 'E. External flow', subtopics: [{ name: 'E. External flow', content: null }] },
        {
          name: 'F. Compressible flow',
          subtopics: [
            { name: 'Mach Number', content: null },
            { name: 'Isentropic Flow Relationships', content: null },
            { name: 'Normal Shock Relationships', content: null },
          ]
        },
        { name: 'G. Power and efficiency', subtopics: [{ name: 'G. Power and efficiency', content: null }] },
        { name: 'H. Performance curves', subtopics: [{ name: 'H. Performance curves', content: null }] },
        { name: 'I. Scaling laws for fans, pumps, and compressors', subtopics: [{ name: 'I. Scaling laws for fans, pumps, and compressors', content: null }] },
      ],
    },
    {
      name: '11. Thermodynamics',
      topics: [
        { name: 'A. Properties of ideal gases and pure substances', subtopics: [{ name: 'A. Properties of ideal gases and pure substances', content: null }] },
        { name: 'B. Energy transfers', subtopics: [{ name: 'B. Energy transfers', content: null }] },
        {
          name: 'C. Laws of thermodynamics',
          subtopics: [
            { name: 'Zeroth Law of Thermodynamics', content: null },
            { name: 'First Law of Thermodynamics', content: null },
            { name: 'Second Law of Thermodynamics', content: null },
            { name: 'Third Law of Thermodynamics', content: null }
          ]
        },
        {
          name: 'D. Processes',
          subtopics: [
            { name: 'Isochoric Process', content: null },
            { name: 'Isobaric Process', content: null },
            { name: 'Isothermal Process', content: null },
            { name: 'Adiabatic Process', content: null },
            { name: 'Polytropic Process', content: null },
            { name: 'Cyclic Process', content: null },
          ]
        },
        { name: 'E. Performance of components', subtopics: [{ name: 'E. Performance of components', content: null }] },
        {
          name: 'F. Power cycles',
          subtopics: [
            { name: 'Carnot Cycle', content: null },
            { name: 'Rankine Cycle', content: null },
            { name: 'Otto Cycle', content: null },
            { name: 'Diesel Cycle', content: null },
          ]
        },
        { 
          name: 'G. Refrigeration and heat pump cycles', 
          subtopics: [
            { name: 'Stages of Refrigeration Cycle', content: null },
            { name: 'Air Refrigeration Cycle', content: null },
          ] 
        },
        {
          name: 'H. Nonreacting mixtures of gases',
          subtopics: [
            { name: 'Mass and Mole Fractions', content: null },
            { name: "Dalton's Law of Partial Pressure", content: null }
          ]
        },
        { name: 'I. Psychrometrics', subtopics: [{ name: 'I. Psychrometrics', content: null }] },
        { name: 'J. Heating, ventilation, and air-conditioning (HVAC) processes', subtopics: [{ name: 'J. Heating, ventilation, and air-conditioning (HVAC) processes', content: null }] },
        {
          name: 'K. Combustion and combustion products',
          subtopics: [
            { name: 'Heats of Reaction', content: null },
            { name: 'Combustion of Hydrocarbon in Pure O2', content: null },
            { name: 'Combustion in Air', content: null },
            { name: 'Incomplete Combustion', content: null },
          ]
        },
      ],
    },
    {
      name: '12. Heat Transfer',
      topics: [
        {
          name: 'A. Conduction',
          subtopics: [
            { name: 'Fourier\'s Law of Conduction', content: null },
            { name: 'Conduction through a Plane Wall', content: null },
            { name: 'Conduction through a Cylindrical Wall', content: null },
            { name: 'Critical Insulation Radius', content: null },
            { name: 'Thermal Resistance of Various Objects', content: null },
          ]
        },
        { name: 'B. Convection', subtopics: [{ name: 'B. Convection', content: null }] },
        {
          name: 'C. Radiation',
          subtopics: [
            { name: 'Perfectly Black Body', content: null },
            { name: 'Stefan-Boltzmann Law', content: null },
            { name: 'Shape Factors', content: null },
            { name: 'Net Energy Exchange between Two Bodies', content: null },
          ]
        },
        {
          name: 'D. Transient processes',
          subtopics: [
            { name: 'Lumped System Analysis', content: null },
            { name: 'Fins', content: null },
          ]
        },
        {
          name: 'E. Heat exchangers',
          subtopics: [
            { name: 'Logarithmic Mean Temperature Difference (LMTD)', content: null },
            { name: 'Heat Exchanger Effectiveness', content: null },
            { name: 'NTU', content: null },
            { name: 'Effectiveness-NTU Relation', content: null },
          ]
        },
      ],
    },
    {
      name: '13. Measurements, Instrumentation, and Controls',
      topics: [
        {
          name: 'A. Sensors and transducers',
          subtopics: [
            { name: 'LVDT', content: null },
            { name: 'RTD', content: null },
            { name: 'Thermistors', content: null },
            { name: 'Thermocouple', content: null },
            { name: 'Strain Gage', content: null },
            { name: 'Wheatstone Bridge', content: null },
            { name: 'Piezoelectric Transducers', content: null },
            { name: 'Pressure Sensors', content: null },
            { name: 'pH Sensor', content: null },
          ]
        },
        {
          name: 'B. Control systems',
          subtopics: [
            { name: 'Feedback', content: null },
            { name: 'Block Diagrams', content: null },
          ]
        },
        { 
          name: 'C. Dynamic system response', 
          subtopics: [
            { name: 'Dynamic System Response Terminology', content: null },
            { name: 'Time Response of a First Order System', content: null },
            { name: 'Time Response of a Second Order Underdamped System', content: null },
            { name: 'Steady State Error', content: null }
          ] 
        },
        { 
          name: 'D. Measurement uncertainty', 
          subtopics: [
            { name: 'Error Propagation', content: null },
            { name: 'Accuracy and Precision', content: null },
            { name: 'Significant Figures', content: null }
          ] 
        },
      ],
    },
    {
      name: '14. Mechanical Design and Analysis',
      topics: [
        { name: 'A. Stress analysis of machine elements', subtopics: [{ name: 'A. Stress analysis of machine elements', content: null }] },
        { 
          name: 'B. Failure theories and analysis', 
          subtopics: [
            { name: 'Failure Theory for Brittle Materials', content: null },
            { name: 'Failure Theory for Ductile Materials', content: null },
            { name: 'Variable Loading Failure Theories', content: null },
            { name: 'Endurance Limits for Steel', content: null }
          ] 
        },
        { name: 'C. Deformation and stiffness', subtopics: [{ name: 'C. Deformation and stiffness', content: null }] },
        { name: 'D. Springs', subtopics: [{ name: 'D. Springs', content: null }] },
        { name: 'E. Pressure vessels and piping', subtopics: [{ name: 'E. Pressure vessels and piping', content: null }] },
        { 
          name: 'F. Bearings', 
          subtopics: [
            { name: 'Basic Load Rating', content: null },
            { name: 'Equivalent radial Load', content: null },
          ] 
        },
        { name: 'G. Power screws', subtopics: [{ name: 'G. Power screws', content: null }] },
        { 
          name: 'H. Power transmission', 
          subtopics: [
            { name: 'Shaft and Axles', content: null },
            { name: 'Gearing', content: null },
            { name: 'Gear Trains', content: null },
            { name: 'Loading on Gears', content: null },
            { name: 'Lewis Equation', content: null },
          ] 
        },
        { 
          name: 'I. Joining methods', 
          subtopics: [
            { name: 'Welding', content: null },
            { name: 'Adhesives', content: null },
            { name: 'Mechanical Fasteners', content: null }
          ] 
        },
        { 
          name: 'J. Manufacturability', 
          subtopics: [
            { name: 'Terminology of Limit Systems', content: null },
            { name: 'Types of Fits', content: null },
            { name: 'Feature Control Frame', content: null },
            { name: 'Basis of Fits', content: null },
            { name: 'Limit Gauges', content: null }
          ] 
        },
        { name: 'K. Quality and reliability', subtopics: [{ name: 'K. Quality and reliability', content: null }] },
        { 
          name: 'L. Components', 
          subtopics: [
            { name: 'Components of a Hydraulic System', content: null },
            { name: 'Components of a Pneumatic System', content: null },
            { name: 'Valves in Pneumatic and Hydraulic Circuits', content: null },
            { name: 'Electromechanical Components', content: null },
          ] 
        },
        { 
          name: 'M. Engineering drawing interpretations and geometric dimensioning and tolerancing (GD&T)', 
          subtopics: [
            { name: 'Engineering Drawing', content: null },
            { name: 'GD and T', content: null }
          ] 
        },
      ],
    },
  ],
  Other: [
    {
      name: '1. General Engineering',
      topics: [
        { name: 'A. Mathematics', subtopics: [{ name: 'A. Mathematics', content: null }] },
        { name: 'B. Statics', subtopics: [{ name: 'B. Statics', content: null }] },
        { name: 'C. Dynamics', subtopics: [{ name: 'C. Dynamics', content: null }] },
      ],
    },
  ],
};