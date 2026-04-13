import { useState, type CSSProperties } from 'react'
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
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TimerReset,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import heroImage from './assets/hero-flowsync.svg'
import './FlowSyncLanding.css'

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
  { href: 'https://github.com/', label: 'GitHub' },
]

function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export function FlowSyncLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion() ?? false
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]
  const viewport = { once: true, amount: 0.22 }

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

  return (
    <div className="page-shell" id="top">
      <div className="page-bg" aria-hidden="true">
        <span className="page-bg__orb page-bg__orb--one" />
        <span className="page-bg__orb page-bg__orb--two" />
        <span className="page-bg__grid" />
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Accueil FlowSync">
            <span className="brand-mark" aria-hidden="true">
              <Sparkles size={16} />
            </span>
            <span className="brand-copy">
              <strong>FlowSync</strong>
              <small>Gestion de projets en temps réel</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="button button--ghost header-cta" href="#preview">
              Voir l’aperçu
            </a>
            <a className="button button--primary header-cta" href="#cta">
              Essai gratuit
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
            >
              <div className="container mobile-menu__inner">
                <div className="mobile-menu__links">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      className="mobile-menu__link"
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mobile-menu__actions">
                  <a className="button button--secondary" href="#preview" onClick={() => setMenuOpen(false)}>
                    Voir l’aperçu
                  </a>
                  <a className="button button--primary" href="#cta" onClick={() => setMenuOpen(false)}>
                    Essai gratuit
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <motion.div className="hero-copy" {...heroMotion}>
              <span className="eyebrow">SaaS en temps réel pour équipes modernes</span>
              <h1>
                Travaillez plus vite.
                <span>Collaborez mieux.</span>
              </h1>
              <p>
                FlowSync est un espace de travail élégant qui réunit planification, exécution et reporting dans un flux
                unique, calme et temps réel.
              </p>

              <div className="hero-actions">
                <a className="button button--primary button--large" href="#pricing">
                  Essai gratuit <ArrowRight size={18} />
                </a>
                <a className="button button--secondary button--large" href="#workflow">
                  Voir la démo <MonitorSmartphone size={18} />
                </a>
              </div>

              <div className="hero-metrics">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="hero-trust">
                <div className="hero-trust__avatars" aria-hidden="true">
                  {heroAvatars.map((avatar, index) => (
                    <span
                      key={avatar.initials}
                      className={`hero-trust__avatar hero-trust__avatar--${index + 1}`}
                      style={{ background: avatar.background } as CSSProperties}
                    >
                      {avatar.initials}
                    </span>
                  ))}
                </div>
                <p>Conçu pour les équipes produit, design et ingénierie qui veulent tout comprendre en un coup d’œil.</p>
              </div>
            </motion.div>

            <motion.div className="hero-visual" {...heroMotion}>
              <div className="hero-visual__halo" aria-hidden="true" />
              <div className="hero-visual__surface">
                <div className="hero-visual__window" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <strong>Espace en direct</strong>
                </div>
                <div className="hero-visual__content">
                  <div className="hero-visual__badge">
                    <Clock3 size={16} />
                    Sync en 0,8 s
                  </div>
                  <div className="hero-visual__card">
                    <img
                      src={heroImage}
                      alt="Illustration du produit FlowSync montrant des cartes de projet superposées"
                      className="hero-visual__image"
                    />
                  </div>
                  <div className="floating-card floating-card--left">
                    <Sparkles size={18} />
                    <div>
                      <strong>3 automatisations actives</strong>
                      <span>Routage et rappels activés</span>
                    </div>
                  </div>
                  <div className="floating-card floating-card--right">
                    <Users size={18} />
                    <div>
                      <strong>12 coéquipiers connectés</strong>
                      <span>Collaboration en temps réel</span>
                    </div>
                  </div>
                  <div className="floating-card floating-card--bottom">
                    <BarChart3 size={18} />
                    <div>
                      <strong>Santé projet +18 %</strong>
                      <span>La vélocité monte</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section className="section" {...sectionMotionProps} id="features">
          <div className="container">
            <SectionHeading
              eyebrow="Valeur produit"
              title="Pensé pour garder les équipes alignées sans les ralentir"
              description="Chaque section réduit le bruit, renforce la confiance et rend la progression immédiatement lisible."
              align="center"
            />

            <motion.div className="feature-grid" {...containerMotionProps}>
              {features.map((feature) => {
                const FeatureIcon = feature.icon

                return (
                  <motion.article
                    key={feature.title}
                    className="feature-card"
                    variants={itemVariants}
                    whileHover={hoverLift}
                    transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
                  >
                    <div className="feature-card__icon" aria-hidden="true">
                      <FeatureIcon size={20} />
                    </div>
                    <div className="feature-card__body">
                      <p className="feature-card__metric">{feature.metric}</p>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="section section--split" {...sectionMotionProps} id="workflow">
          <div className="container split-grid">
            <div className="section-copy">
              <SectionHeading
                  eyebrow="Comment ça marche"
                  title="Un parcours simple qui rend le produit évident en quelques secondes"
                  description="L’expérience guide le visiteur de la configuration au résultat sans friction inutile."
              />

              <motion.div className="step-list" {...containerMotionProps}>
                {workflowSteps.map((step, index) => {
                  const StepIcon = step.icon

                  return (
                    <motion.article
                      key={step.title}
                      className="step-card"
                      variants={itemVariants}
                      whileHover={hoverLift}
                    >
                      <div className="step-card__number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="step-card__body">
                        <div className="step-card__title-row">
                          <StepIcon size={18} />
                          <span>{step.note}</span>
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </motion.article>
                  )
                })}
              </motion.div>
            </div>

            <motion.aside className="workflow-panel" variants={sectionVariants}>
              <div className="workflow-panel__top">
                <div>
                  <span className="dashboard-label">Sprint en direct</span>
                  <h3>Un seul flux, une seule source de vérité</h3>
                </div>
                <span className="workflow-panel__tag">
                  <TimerReset size={14} />
                  3 tâches actives
                </span>
              </div>

              <div className="workflow-panel__timeline">
                {workflowSteps.map((step, index) => {
                  const StepIcon = step.icon

                  return (
                    <div key={step.title} className="workflow-panel__step">
                      <div className="workflow-panel__step-marker" aria-hidden="true">
                        <StepIcon size={16} />
                      </div>
                      <div>
                        <div className="workflow-panel__step-header">
                          <strong>{String(index + 1).padStart(2, '0')} {step.title}</strong>
                          <span>{step.note}</span>
                        </div>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="workflow-panel__summary">
                <div className="workflow-panel__chips">
                  <span className="chip">
                    <BrainCircuit size={14} />
                    Routage intelligent
                  </span>
                  <span className="chip">
                    <CalendarDays size={14} />
                    Cadence sprint
                  </span>
                  <span className="chip">
                    <MessageSquareText size={14} />
                    Moins de relances
                  </span>
                </div>

                <div className="workflow-panel__progress">
                  <div className="workflow-panel__progress-head">
                    <span>Momentum de livraison actuel</span>
                    <strong>76%</strong>
                  </div>
                  <div className="progress-bar" aria-hidden="true">
                    <span />
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.section>

        <motion.section className="section" {...sectionMotionProps} id="preview">
          <div className="container">
            <SectionHeading
              eyebrow="Aperçu du dashboard"
              title="Une démonstration visuelle qui semble réelle au premier regard"
              description="Le mockup transforme le concept en quelque chose de concret, pour faire passer la valeur immédiatement."
              align="center"
            />

            <motion.div className="dashboard-preview" variants={sectionVariants}>
              <div className="dashboard-preview__shell">
                <aside className="dashboard-preview__sidebar">
                  <span className="dashboard-label">Projets</span>
                  <div className="dashboard-preview__projects">
                    {projects.map((project, index) => (
                      <div
                        key={project.name}
                        className={`dashboard-project ${index === 0 ? 'dashboard-project--active' : ''}`}
                      >
                        <div className="dashboard-project__meta">
                          <strong>{project.name}</strong>
                          <span>{project.status}</span>
                        </div>
                        <div className="dashboard-project__badge">{project.progress}</div>
                      </div>
                    ))}
                  </div>

                  <div className="dashboard-preview__note">
                    <MonitorSmartphone size={16} />
                    Mise en page mobile-first et interactions rapides sur tous les appareils.
                  </div>
                </aside>

                <div className="dashboard-preview__main">
                  <div className="dashboard-preview__bar">
                    <div>
                      <span className="dashboard-label">Vue globale</span>
                      <h3>Lancez avec confiance</h3>
                    </div>
                    <span className="dashboard-preview__tag">
                      <CircleGauge size={14} />
                      En direct
                    </span>
                  </div>

                  <div className="dashboard-preview__chart" aria-hidden="true">
                    {chartBars.map((bar, index) => (
                      <div key={index} className="chart-column">
                        <div className="chart-column__track">
                          <span className="chart-column__fill" style={{ height: `${bar}%` }} />
                        </div>
                        <span>{['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'][index]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="dashboard-preview__cards">
                    <div className="dashboard-mini-card">
                      <strong>Gain de vélocité</strong>
                      <p>Des responsabilités claires et moins de blocages gardent l’équipe en mouvement.</p>
                      <div className="dashboard-mini-card__stats">
                        <span className="chip chip--compact">
                          <TrendingUpIcon />
                          +18%
                        </span>
                        <span className="chip chip--compact">
                          <Layers3 size={14} />
                          4 flux actifs
                        </span>
                      </div>
                    </div>
                    <div className="dashboard-mini-card">
                      <strong>Cycle de revue</strong>
                      <p>Le feedback arrive plus vite quand l’avancement est visible au même endroit.</p>
                      <div className="dashboard-mini-card__stats">
                        <span className="chip chip--compact">
                          <CheckCircle2 size={14} />
                          12 terminées
                        </span>
                        <span className="chip chip--compact">
                          <TimerReset size={14} />
                          3 en attente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <aside className="dashboard-preview__insights">
                  <div className="insight-card">
                    <span className="dashboard-label">Performance</span>
                    <strong className="insight-card__score">98</strong>
                    <p>Une structure prête pour Lighthouse, avec des visuels sobres et des mouvements subtils.</p>
                    <div className="insight-card__metrics">
                      <span>LCP 1.2s</span>
                      <span>CLS 0.01</span>
                      <span>TTI rapide</span>
                    </div>
                  </div>

                  <div className="insight-card insight-card--secondary">
                    <span className="dashboard-label">Signal équipe</span>
                    <h4>Tout se lit d’un coup d’œil</h4>
                    <p>
                      Des surfaces calmes, une hiérarchie forte et une révélation progressive rendent le produit
                      immédiatement compréhensible.
                    </p>
                  </div>
                </aside>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="section" {...sectionMotionProps} id="pricing">
          <div className="container">
            <SectionHeading
              eyebrow="Tarifs"
              title="Des offres simples qui cadrent clairement la conversion"
              description="L’offre centrale est mise en avant pour orienter le visiteur vers la valeur principale du produit."
              align="center"
            />

            <motion.div className="pricing-grid" {...containerMotionProps}>
              {pricingPlans.map((plan) => (
                <motion.article
                  key={plan.name}
                  className={`pricing-card ${plan.highlighted ? 'pricing-card--featured' : ''}`}
                  variants={itemVariants}
                  whileHover={hoverLift}
                  transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
                >
                  <div className="pricing-card__header">
                    <span className="pricing-card__eyebrow">{plan.name}</span>
                    {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}
                  </div>

                  <div className="pricing-card__price">
                    {plan.price === 'Custom' ? (
                      <strong>{plan.price}</strong>
                    ) : (
                      <>
                        <strong>{plan.price}</strong>
                        <span>{plan.period}</span>
                      </>
                    )}
                  </div>

                  <p>{plan.description}</p>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a className={`button ${plan.highlighted ? 'button--primary' : 'button--secondary'} pricing-card__cta`} href="#cta">
                    {plan.cta}
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="section" {...sectionMotionProps} id="testimonials">
          <div className="container">
            <SectionHeading
              eyebrow="Avis clients"
              title="Une couche de crédibilité qui soutient le discours commercial"
              description="Des citations courtes et précises gardent la preuve sociale centrée sur la confiance, la clarté et la vitesse."
              align="center"
            />

            <motion.div className="testimonial-grid" {...containerMotionProps}>
              {testimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.name}
                  className="testimonial-card"
                  variants={itemVariants}
                  whileHover={hoverLift}
                  transition={{ duration: reduceMotion ? 0 : 0.25, ease: easeOut }}
                >
                  <div className="testimonial-card__stars" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="testimonial-card__quote">“{testimonial.quote}”</p>

                  <div className="testimonial-card__author">
                    <span className="testimonial-avatar">{testimonial.initials}</span>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>
                        {testimonial.role} · {testimonial.company}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <section className="section section--cta" id="cta">
          <div className="container">
            <motion.div
              className="cta-panel"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: easeOut }}
            >
              <div className="cta-panel__copy">
                <span className="eyebrow eyebrow--light">Prêt à lancer ?</span>
                <h2>Transformez le chaos projet en élan concret.</h2>
                <p>
                  Offrez à votre équipe un espace unique pour planifier, suivre et livrer en temps réel, avec une
                  narration produit premium dès le premier scroll.
                </p>
              </div>

              <div className="cta-panel__actions">
                <a className="button button--primary button--large" href="#pricing">
                  Essai gratuit <ArrowRight size={18} />
                </a>
                <a className="button button--secondary button--large" href="#features">
                  Explorer les fonctionnalités
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand footer-brand__identity">
              <span className="brand-mark" aria-hidden="true">
                <Sparkles size={16} />
              </span>
              <span className="brand-copy">
                <strong>FlowSync</strong>
                <small>Gestion de projets en temps réel</small>
              </span>
            </div>
            <p>
              Un concept de landing page SaaS centré sur la clarté, la conversion, la performance et le langage visuel
              d’une startup produit moderne.
            </p>
            <div className="footer-pills" aria-label="Points forts du projet">
              <span className="footer-pill">Mode sombre</span>
              <span className="footer-pill">SEO prêt</span>
              <span className="footer-pill">Accessibilité</span>
              <span className="footer-pill">Chargement rapide</span>
            </div>
          </div>

          <div>
            <span className="footer-title">Produit</span>
            <div className="footer-links">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="footer-title">Ressources</span>
            <div className="footer-links">
              {supportLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer-socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
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
