import { useEffect, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  CircleGauge,
  Clock3,
  LayoutDashboard,
  Layers3,
  MessageSquareText,
  Menu,
  MonitorSmartphone,
  Moon,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  TimerReset,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import heroImage from './assets/hero-flowsync.svg'

type FeatureItem = {
  title: string
  description: string
  metric: string
  icon: LucideIcon
}

type WorkflowStep = {
  title: string
  description: string
  icon: LucideIcon
  note: string
}

type PricingPlan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  tone?: 'default' | 'light'
}

const navLinks = [
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#workflow', label: 'Méthode' },
  { href: '#preview', label: 'Aperçu' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#testimonials', label: 'Avis' },
]

const heroMetrics = [
  { value: '24/7', label: 'Synchronisation en temps réel' },
  { value: '3 min', label: 'Espace prêt à l’emploi' },
  { value: '+18%', label: 'Gain de vitesse' },
]

const heroAvatars = [
  { initials: 'AM', background: '#e63946' },
  { initials: 'JK', background: '#457b9d' },
  { initials: 'SL', background: '#a8dadc' },
  { initials: 'PR', background: '#1d3557' },
]

const features: FeatureItem[] = [
  {
    title: 'Collaboration en temps réel',
    description: 'Les mises à jour, commentaires et changements d’assignation circulent instantanément dans l’équipe.',
    metric: 'Mise à jour live',
    icon: Users,
  },
  {
    title: 'Automatisation intelligente',
    description: 'Orchestrez les tâches, déclenchez des rappels et éliminez les relances répétitives.',
    metric: 'Règles d’automatisation',
    icon: Workflow,
  },
  {
    title: 'Dashboard décisionnel',
    description: 'Visualisez les blocages, l’avancement et les points d’attention depuis un centre de contrôle apaisé.',
    metric: 'Clarté d’abord',
    icon: LayoutDashboard,
  },
  {
    title: 'Mode focus',
    description: 'Gardez chaque sprint lisible avec une hiérarchie nette et un rythme visuel maîtrisé.',
    metric: 'Moins de bruit',
    icon: CircleGauge,
  },
  {
    title: 'Rapide par design',
    description: 'Un rendu léger et des animations discrètes garantissent une expérience fluide sur tous les écrans.',
    metric: 'Performance optimisée',
    icon: Zap,
  },
  {
    title: 'Confiance et contrôle',
    description: 'Structurez les accès pour les clients, invités et équipes internes sans ajouter de friction.',
    metric: 'Sécurisé par défaut',
    icon: ShieldCheck,
  },
]

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Créez votre espace',
    description: 'Lancez un environnement clair et structuré en quelques clics.',
    icon: Rocket,
    note: 'Fondation',
  },
  {
    title: 'Invitez votre équipe',
    description: 'Rassemblez produit, design, technique et parties prenantes dans un seul flux partagé.',
    icon: Users,
    note: 'Alignement',
  },
  {
    title: 'Connectez le processus',
    description: 'Ajoutez les automatisations, le suivi d’avancement et la collaboration là où cela compte.',
    icon: Workflow,
    note: 'Automatisation',
  },
  {
    title: 'Livrez avec confiance',
    description: 'Analysez les signaux de livraison, les blocages et les résultats dans un seul dashboard.',
    icon: BarChart3,
    note: 'Livraison',
  },
]

const projects = [
  { name: 'Refonte du site', status: 'Dans les temps', progress: '92%' },
  { name: 'Lancement T3', status: 'En revue', progress: '74%' },
  { name: 'Stack d’automatisation', status: '2 blocages', progress: '48%' },
]

const chartBars = [42, 58, 75, 63, 88, 72]

const pricingPlans: PricingPlan[] = [
  {
    name: 'Gratuit',
    price: '$0',
    period: '/mo',
    description: 'Pour les indépendants et les petits tests produit.',
    features: ['3 projets actifs', 'Tableaux de tâches simples', 'Support communauté'],
    cta: 'Commencer',
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    description: 'Pour les équipes qui veulent vitesse, structure et visibilité.',
    features: ['Projets illimités', 'Collaboration temps réel', 'Automatisations et analytics'],
    cta: 'Essai gratuit',
    highlighted: true,
    badge: 'Le plus choisi',
  },
  {
    name: 'Entreprise',
    price: 'Custom',
    period: '',
    description: 'Pour les grandes organisations avec besoins avancés et accompagnement dédié.',
    features: ['SSO et permissions', 'Onboarding dédié', 'Support prioritaire'],
    cta: 'Parler à un expert',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'FlowSync a redonné de la clarté à notre roadmap. Toute l’équipe voit la même réalité en temps réel, sans courir après les infos dans le chat.',
    name: 'Maya Chen',
    role: 'Lead Produit',
    company: 'Northstar Studio',
    initials: 'MC',
  },
  {
    quote:
      'La hiérarchie visuelle est excellente. C’est le premier prototype qui a permis aux parties prenantes de comprendre la valeur immédiatement.',
    name: 'Jordan Ellis',
    role: 'Directeur design',
    company: 'Orbit Labs',
    initials: 'JE',
  },
  {
    quote:
      'La combinaison de clarté, de mouvement et de vitesse donne vraiment l’impression d’un produit abouti, pas seulement d’une page de démonstration.',
    name: 'Sofia Laurent',
    role: 'Engineering Manager',
    company: 'Frameworks Co',
    initials: 'SL',
  },
]

const footerLinks = [
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#workflow', label: 'Méthode' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#testimonials', label: 'Avis' },
]

const supportLinks = [
  { href: '#top', label: 'Haut de page' },
  { href: '#cta', label: 'Essai gratuit' },
  { href: '#preview', label: 'Aperçu' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { href: 'https://x.com/', label: 'X' },
  { href: 'https://github.com/AxelDoussoux/Landing-project-1', label: 'GitHub' },
]

const containerClass = 'mx-auto w-full max-w-7xl px-6 lg:px-8'
const sectionClass = 'py-20 sm:py-24 lg:py-28'
const surfaceClass =
  'rounded-[28px] border border-flowsync-border/70 bg-flowsync-surface/85 shadow-[0_24px_60px_rgba(29,53,87,0.10)] backdrop-blur-xl transition-colors duration-300 dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/80 dark:shadow-[0_24px_60px_rgba(6,12,24,0.35)]'
const heroSurfaceClass =
  'rounded-[32px] border border-flowsync-border/70 bg-flowsync-surface/85 p-4 shadow-[0_32px_80px_rgba(29,53,87,0.16)] backdrop-blur-xl transition-colors duration-300 dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/80 dark:shadow-[0_32px_80px_rgba(6,12,24,0.45)]'
const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flowsync-accent focus-visible:ring-offset-2 focus-visible:ring-offset-flowsync-bg dark:focus-visible:ring-offset-flowsync-bg-dark'
const buttonPrimary = `${buttonBase} bg-flowsync-accent text-white shadow-[0_18px_40px_rgba(69,123,157,0.28)] hover:-translate-y-0.5 hover:bg-[#36627e]`
const buttonSecondary = `${buttonBase} border border-flowsync-border/70 bg-flowsync-surface/80 text-flowsync-text hover:-translate-y-0.5 hover:bg-flowsync-accent-soft/25 dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/75 dark:text-flowsync-text-dark dark:hover:bg-flowsync-accent-soft/10`
const buttonInverted = `${buttonBase} bg-white text-flowsync-text shadow-[0_18px_40px_rgba(255,255,255,0.18)] hover:-translate-y-0.5 hover:bg-flowsync-bg`
const buttonOnDark = `${buttonBase} border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/15`
const iconButton =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-flowsync-border/70 bg-flowsync-surface/80 text-flowsync-text shadow-sm transition hover:-translate-y-0.5 hover:bg-flowsync-accent/10 dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/80 dark:text-flowsync-text-dark dark:hover:bg-white/10'
const navLinkClass =
  'text-sm font-medium text-flowsync-text/75 transition hover:text-flowsync-accent dark:text-flowsync-text-dark/75 dark:hover:text-flowsync-accent-soft'
const eyebrowClass =
  'inline-flex items-center gap-2 rounded-full border border-flowsync-border/70 bg-flowsync-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-accent dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/70 dark:text-flowsync-accent-soft'
const eyebrowLightClass =
  'inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white'

function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'default' }: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} space-y-5`}>
      <span className={tone === 'light' ? eyebrowLightClass : eyebrowClass}>{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-flowsync-text sm:text-4xl lg:text-5xl dark:text-flowsync-text-dark">
        {title}
      </h2>
      <p className="text-base leading-7 text-flowsync-text/75 dark:text-flowsync-text-dark/75">{description}</p>
    </div>
  )
}

export function FlowSyncLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const storedTheme = window.localStorage.getItem('flowsync-theme')

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const reduceMotion = useReducedMotion() ?? false
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]
  const viewport = { once: true, amount: 0.22 }

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem('flowsync-theme', theme)

    const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

    if (themeMeta) {
      themeMeta.content = theme === 'dark' ? '#08111d' : '#f1faee'
    }
  }, [theme])

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: easeOut,
      },
    },
  }

  const staggerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: easeOut,
      },
    },
  }

  const heroMotion = reduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: easeOut },
      }

  const hoverLift = reduceMotion ? undefined : { y: -6, scale: 1.015 }

  const sectionMotionProps = reduceMotion
    ? { initial: false as const }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport,
        variants: sectionVariants,
      }

  const containerMotionProps = reduceMotion
    ? { initial: false as const }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport,
        variants: staggerVariants,
      }

  const themeLabel = theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-flowsync-bg text-flowsync-text transition-colors duration-300 dark:bg-flowsync-bg-dark dark:text-flowsync-text-dark" id="top">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <span className="absolute left-1/2 top-[-8rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-flowsync-accent-soft/30 blur-3xl dark:bg-flowsync-accent-soft/10" />
        <span className="absolute right-[-8rem] top-40 h-[24rem] w-[24rem] rounded-full bg-flowsync-accent/20 blur-3xl dark:bg-flowsync-accent/10" />
        <span className="absolute bottom-[-10rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-flowsync-accent-strong/10 blur-3xl dark:bg-flowsync-accent-strong/5" />
      </div>

      <header className="sticky top-0 z-40 border-b border-flowsync-border/30 bg-flowsync-bg/80 backdrop-blur-xl dark:border-flowsync-border-dark/30 dark:bg-flowsync-bg-dark/80">
        <div className={containerClass}>
          <div className="flex h-20 items-center justify-between gap-4">
            <a className="flex items-center gap-3 rounded-full" href="#top" aria-label="Accueil FlowSync">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-flowsync-accent text-white shadow-[0_18px_40px_rgba(69,123,157,0.28)]">
                <Sparkles size={16} />
              </span>
              <span className="hidden flex-col leading-tight sm:flex">
                <strong className="font-display text-lg text-flowsync-text dark:text-flowsync-text-dark">FlowSync</strong>
                <small className="text-xs font-medium uppercase tracking-[0.24em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                  Gestion de projets en temps réel
                </small>
              </span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a key={link.href} className={navLinkClass} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                className={iconButton}
                type="button"
                aria-label={themeLabel}
                onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="hidden items-center gap-3 md:flex">
                <a className={buttonSecondary} href="#preview">
                  Voir l’aperçu
                </a>
                <a className={buttonPrimary} href="#cta">
                  Essai gratuit
                </a>
              </div>

              <button
                className={`${iconButton} md:hidden`}
                type="button"
                aria-label={menuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="border-t border-flowsync-border/30 bg-flowsync-bg/95 backdrop-blur-xl dark:border-flowsync-border-dark/30 dark:bg-flowsync-bg-dark/95 md:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
            >
              <div className={`${containerClass} space-y-5 py-6`}>
                <div className="grid gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      className="rounded-2xl border border-flowsync-border/40 bg-flowsync-surface/80 px-4 py-3 text-sm font-medium text-flowsync-text transition hover:border-flowsync-accent/40 hover:bg-flowsync-accent/10 dark:border-flowsync-border-dark/40 dark:bg-flowsync-surface-dark/75 dark:text-flowsync-text-dark dark:hover:bg-white/5"
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className={buttonSecondary} href="#preview" onClick={() => setMenuOpen(false)}>
                    Voir l’aperçu
                  </a>
                  <a className={buttonPrimary} href="#cta" onClick={() => setMenuOpen(false)}>
                    Essai gratuit
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="pb-16 pt-10 sm:pb-20 lg:pb-28 lg:pt-16">
          <div className={containerClass}>
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <motion.div className="space-y-8" {...heroMotion}>
                <span className={eyebrowClass}>SaaS en temps réel pour équipes modernes</span>
                <h1 className="max-w-2xl font-display text-5xl font-bold tracking-tight text-flowsync-text sm:text-6xl lg:text-7xl dark:text-flowsync-text-dark">
                  Travaillez plus vite.
                  <span className="mt-3 block text-flowsync-accent">Collaborez mieux.</span>
                </h1>
                <p className="max-w-xl text-lg leading-8 text-flowsync-text/75 dark:text-flowsync-text-dark/75">
                  FlowSync est un espace de travail élégant qui réunit planification, exécution et reporting dans un
                  flux unique, calme et temps réel.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a className={buttonPrimary} href="#pricing">
                    Essai gratuit <ArrowRight size={18} />
                  </a>
                  <a className={buttonSecondary} href="#workflow">
                    Voir la démo <MonitorSmartphone size={18} />
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {heroMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-flowsync-border/70 bg-flowsync-surface/85 p-4 shadow-sm dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/70"
                    >
                      <strong className="block text-2xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                        {metric.value}
                      </strong>
                      <span className="mt-1 block text-sm text-flowsync-text/70 dark:text-flowsync-text-dark/70">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex -space-x-3" aria-hidden="true">
                    {heroAvatars.map((avatar) => (
                      <span
                        key={avatar.initials}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-flowsync-bg text-xs font-bold text-white shadow-md dark:border-flowsync-bg-dark"
                        style={{ background: avatar.background } as CSSProperties}
                      >
                        {avatar.initials}
                      </span>
                    ))}
                  </div>
                  <p className="max-w-md text-sm leading-6 text-flowsync-text/70 dark:text-flowsync-text-dark/70">
                    Conçu pour les équipes produit, design et ingénierie qui veulent tout comprendre en un coup d’œil.
                  </p>
                </div>
              </motion.div>

              <motion.div className="relative" {...heroMotion}>
                <div className="absolute inset-0 -z-10 rounded-[40px] bg-flowsync-accent-soft/15 blur-3xl dark:bg-flowsync-accent-soft/10" />
                <div className={heroSurfaceClass}>
                  <div className="flex items-center justify-between gap-4 border-b border-flowsync-border/20 pb-4 dark:border-flowsync-border-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-flowsync-accent-strong" />
                      <span className="h-3 w-3 rounded-full bg-flowsync-accent-soft" />
                      <span className="h-3 w-3 rounded-full bg-flowsync-accent" />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-flowsync-accent/10 px-3 py-1 text-xs font-semibold text-flowsync-accent dark:bg-white/10 dark:text-flowsync-text-dark">
                      <Clock3 size={14} />
                      Espace en direct
                    </div>
                  </div>

                  <div className="relative mx-auto max-w-[34rem] pt-6 pb-12">
                    <div className="rounded-[28px] border border-flowsync-border/15 bg-white/70 p-4 shadow-[0_24px_60px_rgba(29,53,87,0.12)] dark:border-flowsync-border-dark/20 dark:bg-[#101b2d]/85">
                      <img
                        src={heroImage}
                        alt="Illustration du produit FlowSync montrant des cartes de projet superposées"
                        className="w-full rounded-[22px]"
                      />
                    </div>

                    <div className="absolute left-0 top-8 hidden w-56 -translate-x-4 rounded-2xl border border-flowsync-border/20 bg-flowsync-surface/90 p-4 shadow-lg backdrop-blur-xl lg:block dark:border-flowsync-border-dark/20 dark:bg-flowsync-surface-dark/90">
                      <div className="flex items-start gap-3">
                        <Sparkles size={18} className="mt-0.5 text-flowsync-accent" />
                        <div>
                          <strong className="block text-sm text-flowsync-text dark:text-flowsync-text-dark">
                            3 automatisations actives
                          </strong>
                          <span className="mt-1 block text-xs text-flowsync-text/70 dark:text-flowsync-text-dark/70">
                            Routage et rappels activés
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-0 top-28 hidden w-56 translate-x-4 rounded-2xl border border-flowsync-border/20 bg-flowsync-surface/90 p-4 shadow-lg backdrop-blur-xl xl:block dark:border-flowsync-border-dark/20 dark:bg-flowsync-surface-dark/90">
                      <div className="flex items-start gap-3">
                        <Users size={18} className="mt-0.5 text-flowsync-accent" />
                        <div>
                          <strong className="block text-sm text-flowsync-text dark:text-flowsync-text-dark">
                            12 coéquipiers connectés
                          </strong>
                          <span className="mt-1 block text-xs text-flowsync-text/70 dark:text-flowsync-text-dark/70">
                            Collaboration en temps réel
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-10 hidden w-56 -translate-y-2 rounded-2xl border border-flowsync-border/20 bg-flowsync-surface/90 p-4 shadow-lg backdrop-blur-xl lg:block dark:border-flowsync-border-dark/20 dark:bg-flowsync-surface-dark/90">
                      <div className="flex items-start gap-3">
                        <BarChart3 size={18} className="mt-0.5 text-flowsync-accent" />
                        <div>
                          <strong className="block text-sm text-flowsync-text dark:text-flowsync-text-dark">
                            Santé projet +18 %
                          </strong>
                          <span className="mt-1 block text-xs text-flowsync-text/70 dark:text-flowsync-text-dark/70">
                            La vélocité monte
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section className={sectionClass} {...sectionMotionProps} id="features">
          <div className={containerClass}>
            <SectionHeading
              eyebrow="Valeur produit"
              title="Pensé pour garder les équipes alignées sans les ralentir"
              description="Chaque section réduit le bruit, renforce la confiance et rend la progression immédiatement lisible."
              align="center"
            />

            <motion.div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3" {...containerMotionProps}>
              {features.map((feature) => {
                const FeatureIcon = feature.icon

                return (
                  <motion.article
                    key={feature.title}
                    className="group h-full rounded-[24px] border border-flowsync-border/70 bg-flowsync-surface/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-flowsync-accent/40 hover:shadow-[0_20px_50px_rgba(29,53,87,0.10)] dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/75 dark:hover:border-flowsync-accent-soft/40 dark:hover:shadow-[0_20px_50px_rgba(6,12,24,0.35)]"
                    variants={itemVariants}
                    whileHover={hoverLift}
                    transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flowsync-accent/10 text-flowsync-accent dark:bg-flowsync-accent/15">
                      <FeatureIcon size={20} />
                    </div>
                    <div className="mt-5 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flowsync-accent/80 dark:text-flowsync-accent-soft/80">
                        {feature.metric}
                      </p>
                      <h3 className="font-display text-xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-7 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                        {feature.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </motion.section>

        <motion.section className={sectionClass} {...sectionMotionProps} id="workflow">
          <div className={containerClass}>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Comment ça marche"
                  title="Un parcours simple qui rend le produit évident en quelques secondes"
                  description="L’expérience guide le visiteur de la configuration au résultat sans friction inutile."
                />

                <motion.div className="space-y-4" {...containerMotionProps}>
                  {workflowSteps.map((step, index) => {
                    const StepIcon = step.icon

                    return (
                      <motion.article
                        key={step.title}
                        className="flex gap-4 rounded-[22px] border border-flowsync-border/70 bg-flowsync-surface/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/75"
                        variants={itemVariants}
                        whileHover={hoverLift}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-flowsync-accent text-sm font-bold text-white shadow-[0_16px_34px_rgba(69,123,157,0.22)]">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                            <StepIcon size={18} className="text-flowsync-accent" />
                            <span>{step.note}</span>
                          </div>
                          <h3 className="font-display text-xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                            {step.title}
                          </h3>
                          <p className="text-sm leading-7 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                            {step.description}
                          </p>
                        </div>
                      </motion.article>
                    )
                  })}
                </motion.div>
              </div>

              <motion.aside className={`${surfaceClass} p-6`} variants={sectionVariants}>
                <div className="flex items-start justify-between gap-4 border-b border-flowsync-border/20 pb-5 dark:border-flowsync-border-dark/20">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                      Sprint en direct
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                      Un seul flux, une seule source de vérité
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-flowsync-accent/10 px-3 py-2 text-xs font-semibold text-flowsync-accent dark:bg-white/10 dark:text-flowsync-text-dark">
                    <TimerReset size={14} />
                    3 tâches actives
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {workflowSteps.map((step, index) => {
                    const StepIcon = step.icon

                    return (
                      <div
                        key={step.title}
                        className="flex gap-4 rounded-2xl border border-flowsync-border/15 bg-flowsync-bg/50 p-4 dark:border-flowsync-border-dark/15 dark:bg-white/5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-flowsync-accent/10 text-flowsync-accent dark:bg-white/10 dark:text-flowsync-text-dark">
                          <StepIcon size={16} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-4">
                            <strong className="text-sm text-flowsync-text dark:text-flowsync-text-dark">
                              {String(index + 1).padStart(2, '0')} {step.title}
                            </strong>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-flowsync-text/55 dark:text-flowsync-text-dark/55">
                              {step.note}
                            </span>
                          </div>
                          <p className="text-sm leading-6 text-flowsync-text/70 dark:text-flowsync-text-dark/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 rounded-[24px] border border-flowsync-border/15 bg-flowsync-bg/50 p-5 dark:border-flowsync-border-dark/15 dark:bg-white/5">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-flowsync-border/15 bg-flowsync-surface/90 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/80 dark:text-flowsync-text-dark">
                      <BrainCircuit size={14} />
                      Routage intelligent
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-flowsync-border/15 bg-flowsync-surface/90 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/80 dark:text-flowsync-text-dark">
                      <CalendarDays size={14} />
                      Cadence sprint
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-flowsync-border/15 bg-flowsync-surface/90 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/80 dark:text-flowsync-text-dark">
                      <MessageSquareText size={14} />
                      Moins de relances
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-flowsync-text/70 dark:text-flowsync-text-dark/70">Momentum de livraison actuel</span>
                      <strong className="text-flowsync-text dark:text-flowsync-text-dark">76%</strong>
                    </div>
                    <div className="h-2 rounded-full bg-flowsync-accent/15 dark:bg-white/10" aria-hidden="true">
                      <span className="block h-2 w-[76%] rounded-full bg-flowsync-accent" />
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </motion.section>

        <motion.section className={sectionClass} {...sectionMotionProps} id="preview">
          <div className={containerClass}>
            <SectionHeading
              eyebrow="Aperçu du dashboard"
              title="Une démonstration visuelle qui semble réelle au premier regard"
              description="Le mockup transforme le concept en quelque chose de concret, pour faire passer la valeur immédiatement."
              align="center"
            />

            <motion.div className={`${surfaceClass} mt-12 overflow-hidden p-4 lg:p-6`} variants={sectionVariants}>
              <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)_260px]">
                <aside className="rounded-[22px] border border-flowsync-border/15 bg-flowsync-bg/55 p-5 dark:border-flowsync-border-dark/15 dark:bg-white/5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                    Projets
                  </span>
                  <div className="mt-4 space-y-3">
                    {projects.map((project, index) => (
                      <div
                        key={project.name}
                        className={`rounded-2xl border px-4 py-3 transition ${
                          index === 0
                            ? 'border-flowsync-accent/30 bg-flowsync-accent/10 dark:border-flowsync-accent-soft/30 dark:bg-white/10'
                            : 'border-flowsync-border/15 bg-flowsync-surface/80 dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/75'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <strong className="block text-sm text-flowsync-text dark:text-flowsync-text-dark">
                              {project.name}
                            </strong>
                            <span className="mt-1 block text-xs text-flowsync-text/65 dark:text-flowsync-text-dark/65">
                              {project.status}
                            </span>
                          </div>
                          <div className="rounded-full bg-flowsync-surface px-3 py-1 text-xs font-semibold text-flowsync-text shadow-sm dark:bg-flowsync-bg-dark dark:text-flowsync-text-dark">
                            {project.progress}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-flowsync-border/15 bg-flowsync-surface/80 p-4 text-sm leading-6 text-flowsync-text/72 dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/75 dark:text-flowsync-text-dark/72">
                    <MonitorSmartphone size={16} className="mt-0.5 shrink-0 text-flowsync-accent" />
                    <span>Mise en page mobile-first et interactions rapides sur tous les appareils.</span>
                  </div>
                </aside>

                <div className="rounded-[22px] border border-flowsync-border/15 bg-flowsync-bg/40 p-5 dark:border-flowsync-border-dark/15 dark:bg-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                        Vue globale
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                        Lancez avec confiance
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-flowsync-accent/10 px-3 py-2 text-xs font-semibold text-flowsync-accent dark:bg-white/10 dark:text-flowsync-text-dark">
                      <CircleGauge size={14} />
                      En direct
                    </span>
                  </div>

                  <div className="mt-6 flex h-60 items-end gap-3 rounded-[20px] border border-flowsync-border/15 bg-flowsync-surface/80 px-5 py-5 dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/80">
                    {chartBars.map((bar, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center gap-3">
                        <div className="flex h-full w-full items-end rounded-full bg-flowsync-bg/70 px-1 dark:bg-white/5">
                          <span
                            className="block w-full rounded-full bg-flowsync-accent transition-all duration-300"
                            style={{ height: `${bar}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'][index]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[20px] border border-flowsync-border/15 bg-flowsync-surface/80 p-4 dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/75">
                      <strong className="block text-sm text-flowsync-text dark:text-flowsync-text-dark">
                        Gain de vélocité
                      </strong>
                      <p className="mt-2 text-sm leading-6 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                        Des responsabilités claires et moins de blocages gardent l’équipe en mouvement.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-flowsync-border/15 bg-flowsync-bg/80 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/15 dark:bg-white/5 dark:text-flowsync-text-dark">
                          <TrendingUpIcon />
                          +18%
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-flowsync-border/15 bg-flowsync-bg/80 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/15 dark:bg-white/5 dark:text-flowsync-text-dark">
                          <Layers3 size={14} />
                          4 flux actifs
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[20px] border border-flowsync-border/15 bg-flowsync-surface/80 p-4 dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/75">
                      <strong className="block text-sm text-flowsync-text dark:text-flowsync-text-dark">
                        Cycle de revue
                      </strong>
                      <p className="mt-2 text-sm leading-6 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                        Le feedback arrive plus vite quand l’avancement est visible au même endroit.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-flowsync-border/15 bg-flowsync-bg/80 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/15 dark:bg-white/5 dark:text-flowsync-text-dark">
                          <CheckCircle2 size={14} />
                          12 terminées
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-flowsync-border/15 bg-flowsync-bg/80 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/15 dark:bg-white/5 dark:text-flowsync-text-dark">
                          <TimerReset size={14} />
                          3 en attente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <aside className="space-y-4 rounded-[22px] border border-flowsync-border/15 bg-flowsync-bg/50 p-5 dark:border-flowsync-border-dark/15 dark:bg-white/5">
                  <div className="rounded-[22px] border border-flowsync-border/15 bg-flowsync-surface/80 p-5 dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/75">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                      Performance
                    </span>
                    <strong className="mt-3 block text-5xl font-display font-bold text-flowsync-text dark:text-flowsync-text-dark">
                      98
                    </strong>
                    <p className="mt-3 text-sm leading-6 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                      Une structure prête pour Lighthouse, avec des visuels sobres et des mouvements subtils.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-flowsync-text/65 dark:text-flowsync-text-dark/65">
                      <span className="rounded-full border border-flowsync-border/15 bg-flowsync-bg/80 px-3 py-2 dark:border-flowsync-border-dark/15 dark:bg-white/5">
                        LCP 1.2s
                      </span>
                      <span className="rounded-full border border-flowsync-border/15 bg-flowsync-bg/80 px-3 py-2 dark:border-flowsync-border-dark/15 dark:bg-white/5">
                        CLS 0.01
                      </span>
                      <span className="rounded-full border border-flowsync-border/15 bg-flowsync-bg/80 px-3 py-2 dark:border-flowsync-border-dark/15 dark:bg-white/5">
                        TTI rapide
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-flowsync-border/15 bg-flowsync-surface/80 p-5 dark:border-flowsync-border-dark/15 dark:bg-flowsync-surface-dark/75">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                      Signal équipe
                    </span>
                    <h4 className="mt-3 font-display text-xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                      Tout se lit d’un coup d’œil
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                      Des surfaces calmes, une hiérarchie forte et une révélation progressive rendent le produit
                      immédiatement compréhensible.
                    </p>
                  </div>
                </aside>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className={sectionClass} {...sectionMotionProps} id="pricing">
          <div className={containerClass}>
            <SectionHeading
              eyebrow="Tarifs"
              title="Des offres simples qui cadrent clairement la conversion"
              description="L’offre centrale est mise en avant pour orienter le visiteur vers la valeur principale du produit."
              align="center"
            />

            <motion.div className="mt-12 grid gap-6 lg:grid-cols-3" {...containerMotionProps}>
              {pricingPlans.map((plan) => (
                <motion.article
                  key={plan.name}
                  className={`flex h-full flex-col rounded-[28px] border p-6 shadow-sm transition duration-300 ${
                    plan.highlighted
                      ? 'border-flowsync-accent/40 bg-flowsync-accent/8 ring-1 ring-flowsync-accent/20 lg:scale-[1.02]'
                      : 'border-flowsync-border/70 bg-flowsync-surface/85 dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/80'
                  }`}
                  variants={itemVariants}
                  whileHover={hoverLift}
                  transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                      {plan.name}
                    </span>
                    {plan.badge && (
                      <span className="rounded-full bg-flowsync-accent/10 px-3 py-1 text-xs font-semibold text-flowsync-accent dark:bg-white/10 dark:text-flowsync-text-dark">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    {plan.price === 'Custom' ? (
                      <strong className="font-display text-4xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                        {plan.price}
                      </strong>
                    ) : (
                      <>
                        <strong className="font-display text-5xl font-bold text-flowsync-text dark:text-flowsync-text-dark">
                          {plan.price}
                        </strong>
                        <span className="pb-1 text-sm text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                          {plan.period}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-flowsync-text/78 dark:text-flowsync-text-dark/78">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-flowsync-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a className={`mt-8 ${plan.highlighted ? buttonPrimary : buttonSecondary} w-full`} href="#cta">
                    {plan.cta}
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section className={sectionClass} {...sectionMotionProps} id="testimonials">
          <div className={containerClass}>
            <SectionHeading
              eyebrow="Avis clients"
              title="Une couche de crédibilité qui soutient le discours commercial"
              description="Des citations courtes et précises gardent la preuve sociale centrée sur la confiance, la clarté et la vitesse."
              align="center"
            />

            <motion.div className="mt-12 grid gap-6 lg:grid-cols-3" {...containerMotionProps}>
              {testimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.name}
                  className="rounded-[24px] border border-flowsync-border/70 bg-flowsync-surface/85 p-6 shadow-sm transition duration-300 hover:-translate-y-1 dark:border-flowsync-border-dark/60 dark:bg-flowsync-surface-dark/80"
                  variants={itemVariants}
                  whileHover={hoverLift}
                  transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
                >
                  <div className="flex items-center gap-1 text-flowsync-accent" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mt-5 text-base leading-8 text-flowsync-text/75 dark:text-flowsync-text-dark/75">
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-flowsync-accent text-sm font-bold text-white shadow-[0_16px_34px_rgba(69,123,157,0.22)]">
                      {testimonial.initials}
                    </span>
                    <div>
                      <strong className="block text-sm text-flowsync-text dark:text-flowsync-text-dark">
                        {testimonial.name}
                      </strong>
                      <span className="mt-1 block text-sm text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                        {testimonial.role} · {testimonial.company}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <section className={`${sectionClass} pt-0`} id="cta">
          <div className={containerClass}>
            <motion.div
              className="relative overflow-hidden rounded-[32px] border border-flowsync-border/20 bg-flowsync-text px-6 py-10 text-white shadow-[0_30px_80px_rgba(29,53,87,0.30)] dark:border-flowsync-border-dark/40 dark:bg-flowsync-surface-dark dark:text-flowsync-text-dark"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: easeOut }}
            >
              <span className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
              <span className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-flowsync-accent-soft/15 blur-3xl" aria-hidden="true" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-5">
                  <span className={eyebrowLightClass}>Prêt à lancer ?</span>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl dark:text-flowsync-text-dark">
                    Transformez le chaos projet en élan concret.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/80 dark:text-flowsync-text-dark/80">
                    Offrez à votre équipe un espace unique pour planifier, suivre et livrer en temps réel, avec une
                    narration produit premium dès le premier scroll.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a className={buttonInverted} href="#pricing">
                    Essai gratuit <ArrowRight size={18} />
                  </a>
                  <a className={buttonOnDark} href="#features">
                    Explorer les fonctionnalités
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-flowsync-border/30 py-14 dark:border-flowsync-border-dark/30">
        <div className={containerClass}>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-flowsync-accent text-white shadow-[0_18px_40px_rgba(69,123,157,0.28)]">
                  <Sparkles size={16} />
                </span>
                <div>
                  <strong className="block font-display text-lg text-flowsync-text dark:text-flowsync-text-dark">
                    FlowSync
                  </strong>
                  <span className="block text-xs font-medium uppercase tracking-[0.24em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                    Gestion de projets en temps réel
                  </span>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-flowsync-text/72 dark:text-flowsync-text-dark/72">
                Un concept de landing page SaaS centré sur la clarté, la conversion, la performance et le langage
                visuel d’une startup produit moderne.
              </p>

              <div className="flex flex-wrap gap-3" aria-label="Points forts du projet">
                {['Mode clair / sombre', 'SEO prêt', 'Accessibilité', 'Chargement rapide'].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-flowsync-border/20 bg-flowsync-surface/80 px-3 py-2 text-xs font-semibold text-flowsync-text dark:border-flowsync-border-dark/20 dark:bg-flowsync-surface-dark/75 dark:text-flowsync-text-dark"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                Produit
              </span>
              <div className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    className="block text-sm text-flowsync-text/75 transition hover:text-flowsync-accent dark:text-flowsync-text-dark/75 dark:hover:text-flowsync-accent-soft"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-flowsync-text/60 dark:text-flowsync-text-dark/60">
                Ressources
              </span>
              <div className="mt-4 space-y-3">
                {supportLinks.map((link) => (
                  <a
                    key={link.href}
                    className="block text-sm text-flowsync-text/75 transition hover:text-flowsync-accent dark:text-flowsync-text-dark/75 dark:hover:text-flowsync-accent-soft"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3" aria-label="Social links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="rounded-full border border-flowsync-border/20 bg-flowsync-surface/80 px-3 py-2 text-sm font-medium text-flowsync-text transition hover:border-flowsync-accent/30 hover:text-flowsync-accent dark:border-flowsync-border-dark/20 dark:bg-flowsync-surface-dark/75 dark:text-flowsync-text-dark dark:hover:text-flowsync-accent-soft"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TrendingUpIcon() {
  return <BarChart3 size={14} />
}

export default FlowSyncLanding