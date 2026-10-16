/**
 * Barbearia Mix - Tabela Centralizada de Serviços, Preços e Categorias
 * 
 * Para alterar qualquer valor, nome, tempo ou link de agendamento, 
 * basta modificar este arquivo. As alterações serão refletidas automaticamente no site.
 */

const BARBEARIA_PRECOS = {
  // Informações de Contato & Links Globais
  contato: {
    nome: "Barbearia Mix",
    telefone: "(21) 99459-9535",
    whatsapp: "5521994599535",
    whatsappMsg: "Olá! Gostaria de agendar um horário na Barbearia Mix.",
    trinksUrl: "https://www.trinks.com/barbeariamix",
    endereco: "Av. Paulo de Frontin, 516 - Loja F - Rio Comprido, Rio de Janeiro - RJ",
    cursoFormUrl: "https://docs.google.com/forms/d/1xIREd6qfhmNDXEp2_00ceWyQBwzm7rH5tWgdk1GJUBo/viewform"
  },

  // Categorias de Serviços com Seus Itens (100% em Português)
  categorias: [
    {
      id: "cabelo",
      titulo: "Cabelo & Cortes",
      icone: "fa-solid fa-scissors",
      descricao: "Técnicas clássicas e modernas de tesoura e degradê.",
      itens: [
        {
          id: "corte-masculino",
          nome: "Corte de Cabelo Tradicional",
          duracao: "30 min",
          preco: 50.00,
          precoFormatado: "R$ 50,00",
          descricao: "Corte personalizado com tesoura e máquina, degradê impecável e finalização na lâmina.",
          badge: "Mais Pedido",
          agendarUrl: "https://www.trinks.com/barbeariamix/escolha-profissional/8231312"
        },
        {
          id: "acabamento-pezinho",
          nome: "Acabamento & Pezinho",
          duracao: "15 min",
          preco: 25.00,
          precoFormatado: "R$ 25,00",
          descricao: "Limpeza das costeletas e contornos da nuca na lâmina para manter o corte alinhado.",
          badge: "Manutenção",
          agendarUrl: "https://www.trinks.com/barbeariamix"
        },
        {
          id: "corte-infantil",
          nome: "Corte Infantil Especial",
          duracao: "30 min",
          preco: 50.00,
          precoFormatado: "R$ 50,00",
          descricao: "Atendimento paciente, descontraído e carinhoso para os pequenos com corte de primeira.",
          badge: "Infantil",
          agendarUrl: "https://www.trinks.com/barbeariamix"
        }
      ]
    },
    {
      id: "barba",
      titulo: "Barba & Barboterapia",
      icone: "fa-solid fa-user-ninja",
      descricao: "O tradicional ritual da toalha quente e navalha afiada.",
      itens: [
        {
          id: "barba-completa",
          nome: "Barba com Toalha Quente",
          duracao: "30 min",
          preco: 45.00,
          precoFormatado: "R$ 45,00",
          descricao: "Alinhamento com navalhete descartável, toalha quente, massagem facial e óleos especiais.",
          badge: "Tradicional",
          agendarUrl: "https://www.trinks.com/barbeariamix"
        },
        {
          id: "combo-corte-barba",
          nome: "Combo Corte + Barba",
          duracao: "60 min",
          preco: 85.00,
          precoFormatado: "R$ 85,00",
          descricao: "A experiência completa de transformação: corte estilizado e barboterapia relaxante.",
          badge: "Combo Especial",
          destaque: true,
          agendarUrl: "https://www.trinks.com/barbeariamix/escolha-profissional/8231315"
        },
        {
          id: "alinhamento-barba",
          nome: "Aparar & Alinhar Barba",
          duracao: "20 min",
          preco: 35.00,
          precoFormatado: "R$ 35,00",
          descricao: "Ajuste de volume, alinhamento do bigode e queixo para barbudos práticos.",
          badge: "Rápido",
          agendarUrl: "https://www.trinks.com/barbeariamix"
        }
      ]
    },
    {
      id: "estetica",
      titulo: "Estética & Tratamentos",
      icone: "fa-solid fa-wand-magic-sparkles",
      descricao: "Detalhes que valorizam sua fisionomia e presença.",
      itens: [
        {
          id: "design-sobrancelha",
          nome: "Design de Sobrancelha",
          duracao: "15 min",
          preco: 20.00,
          precoFormatado: "R$ 20,00",
          descricao: "Alinhamento e limpeza na lâmina ou pinça respeitando a harmonia e masculinidade do rosto.",
          badge: "Estética",
          agendarUrl: "https://www.trinks.com/barbeariamix"
        },
        {
          id: "camuflagem-grisalhos",
          nome: "Camuflagem de Grisalhos",
          duracao: "25 min",
          preco: 45.00,
          precoFormatado: "R$ 45,00",
          descricao: "Pigmentação sutil para disfarçar fios brancos na barba ou cabelo com aspecto rejuvenescido.",
          badge: "Rejuvenescimento",
          agendarUrl: "https://www.trinks.com/barbeariamix"
        },
        {
          id: "hidratacao-capilar",
          nome: "Hidratação Profunda & Lavagem",
          duracao: "20 min",
          preco: 35.00,
          precoFormatado: "R$ 35,00",
          descricao: "Nutrição e fortalecimento capilar com massagem no couro cabeludo e produtos profissionais.",
          badge: "Cuidado",
          agendarUrl: "https://www.trinks.com/barbeariamix"
        }
      ]
    }
  ],

  // Planos de Assinatura Mensal (Club Mix)
  planosAssinatura: [
    {
      id: "club-corte",
      nome: "Club Mix | Corte",
      subtitulo: "Para quem não abre mão do cabelo na régua toda semana.",
      preco: 149.90,
      precoFormatado: "R$ 149,90",
      periodo: "/mês",
      economia: "Economia de até 40% no mês",
      destaque: false,
      badge: "Assinatura Mensal",
      beneficios: [
        "Cortes de cabelo o mês inteiro",
        "Acabamento e pezinho sempre impecáveis",
        "Bebida cortesia (cerveja ou café) a cada visita",
        "Cobrança automática sem prender limite do cartão"
      ],
      checkoutUrl: "https://invoice.infinitepay.io/plans/bmix-tijuca/bF8woVdads"
    },
    {
      id: "club-combo",
      nome: "Club Mix | Combo",
      subtitulo: "Experiência completa de cabelo e barba sem limites.",
      preco: 229.90,
      precoFormatado: "R$ 229,90",
      periodo: "/mês",
      economia: "Melhor custo-benefício para estar 100% alinhado",
      destaque: true,
      badge: "Mais Escolhido",
      beneficios: [
        "Cortes ilimitados durante todo o mês",
        "Barboterapia completa com toalha quente",
        "Cerveja gelada ou café premium em todas as sessões",
        "Prioridade e facilidade de agendamento online",
        "Sem fidelidade: cancele quando quiser"
      ],
      checkoutUrl: "https://invoice.infinitepay.io/plans/bmix-tijuca/lZjeRUAVHq"
    },
    {
      id: "club-barba",
      nome: "Club Mix | Barba",
      subtitulo: "Para barbudos exigentes que valorizam o desenho perfeito.",
      preco: 149.90,
      precoFormatado: "R$ 149,90",
      periodo: "/mês",
      economia: "Barba alinhada e tratada toda semana",
      destaque: false,
      badge: "Assinatura Mensal",
      beneficios: [
        "Alinhamentos e barboterapia durante todo o mês",
        "Ritual com toalha quente e pós-barba balsâmico",
        "Hidratação com óleos essenciais especiais",
        "Cerveja gelada ou café em todas as visitas"
      ],
      checkoutUrl: "https://invoice.infinitepay.io/plans/bmix-tijuca/wfyRuCxnXl"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BARBEARIA_PRECOS;
}
