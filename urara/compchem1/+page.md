---
title: 'Computational Chemistry from Scratch'
image: ''
alt: ''
created: 2025-02-24
tags:
    - 'Computational Chemistry'
    - 'Programming'
    - 'Chemistry'
---

<!--- Name this article like "simulating atoms". or how to simulate the smallest things or something --->

So you want to learn computational chemistry but haven't taken quantum mechanics, chemistry, physical chemistry, and numerical algorithms? No problem! In this series of articles we will build up the approximations used in computational chemistry with no prerequisities other than precalculus, high school calculus, and an enthusiastic reader!

# Motivation

Chemistry is an expensive and dangerous field. Doubtless you have heard of stories of crazy chemists blowing up their labs or inhaling toxic fumes or requiring expensive equipment to run experiments. A more convenient way to chemistry, then, is to sit at home on our beds and simulate experiments with our wonderful computers!

Our goal today is to simulate the behavior of atoms with programming.

How can we do that? What even is an atom?

# Starting

Many of these questions are better reserved for an expert in quantum mechanics... but today here I will present a few key assumptions and then build up our approximations from there.

<!-- Now, how can we even have a symbol for \psi -->
<!-- Ok, I have no clue what an atom is or anything that's in it... we might say they have a certain number of electrons and protons and neutrons...? But then again it might change atom to atom. We're a bit lazy so for now let's just represent it as one single symbol to represent everything. \psi. -->
<!-- Okay now we actually want information. We can apply functions to our \psi to get information. Maybe we can get the speed! or momentum! Or how much energy it has stored up! -->
1. **We can represent the full state of an atom with a symbol, $\psi$.** What I mean by state of an atom is this $\psi$ will tell us *everything* we would ever want to know about an atom.
2. **Applying functions[^1] to $\psi$ will give us information about the atom**. For example, we will soon define an
3. **Every atom has an intrinsic "Energy".** You can think of this as how much it can move now and how much it's stored up in the future. For example, the energy of a car is equal to how fast it's moving and how much the car *will* be able to move in the future.

Now, for a little history. At the turn of the 20th century, some wonderful physicists like Niels Bohr, Albert Einstein, Max Planck, and many others discovered a very intriguing property about these atoms we've described: **Every atom can only take on "certain" energies**. What I mean is we can't have a range of energies for our atom. These energies must be *discrete*. It's kind of like how you can only only have one plate or two plates, but half a plate doesn't make sense!

The importance of this 

[^1]: Technically, we apply *operators* to $\psi$ which
