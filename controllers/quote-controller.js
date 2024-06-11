import Quote from '../models/quotes.js';

// Create a new quote
export const createQuote = async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all quotes
export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a quote by ID
export const getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a quote
export const updateQuote = async (req, res) => {
  try {
    const updatedQuote = await Quote.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuote) {
      return res.status(404).json({ error: 'Quote not found' });
    }
    res.status(200).json(updatedQuote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a quote
export const deleteQuote = async (req, res) => {
  try {
    const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
    if (!deletedQuote) {
      return res.status(404).json({ error: 'Quote not found' });
    }
    res.status(200).json({ message: 'Quote deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
